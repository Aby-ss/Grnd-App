// db.js
import { open } from 'react-native-nitro-sqlite';

const initDb = () => {
  try {
    const db = open('sessions.sqlite');
    
    // Create sessions table if it doesn't exist
    db.execute(`
      CREATE TABLE IF NOT EXISTS sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        duration INTEGER NOT NULL,
        startTime TEXT NOT NULL,
        endTime TEXT,
        status TEXT CHECK(status IN ('completed', 'quit', 'in_progress')) NOT NULL,
        createdAt TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    return db;
  } catch (error) {
    console.error('Database initialization failed:', error.message);
    throw error;
  }
};

// Database operations
class SessionsDB {
  constructor() {
    this.db = initDb();
  }

  async addSession(title, duration, startTime, endTime) {
    try {
      const { lastInsertRowid } = await this.db.executeAsync(
        'INSERT INTO sessions (title, duration, startTime, endTime, status) VALUES (?, ?, ?, ?, ?)',
        [title, duration, startTime, endTime, 'completed']
      );
      return lastInsertRowid;
    } catch (error) {
      console.error('Error adding session:', error.message);
      throw error;
    }
  }

  async updateSessionStatus(sessionId, status) {
    try {
      const { rowsAffected } = await this.db.executeAsync(
        'UPDATE sessions SET status = ?, endTime = ? WHERE id = ?',
        [status, new Date().toISOString(), sessionId]
      );
      return rowsAffected > 0;
    } catch (error) {
      console.error('Error updating session:', error.message);
      throw error;
    }
  }

  async getAllSessions() {
    try {
      const { rows } = await this.db.executeAsync(
        'SELECT * FROM sessions ORDER BY createdAt DESC'
      );
      return rows;
    } catch (error) {
      console.error('Error getting sessions:', error.message);
      throw error;
    }
  }

  async getSessionStats() {
    try {
      const { rows } = await this.db.executeAsync(`
        SELECT 
          COUNT(*) as totalSessions,
          SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completedSessions,
          SUM(duration) as totalMinutes,
          AVG(CASE 
            WHEN status = 'completed' 
            THEN ROUND((strftime('%s', endTime) - strftime('%s', startTime)) / 60.0)
            ELSE NULL 
          END) as avgSessionLength
        FROM sessions
      `);
      return rows[0];
    } catch (error) {
      console.error('Error getting stats:', error.message);
      throw error;
    }
  }

  async getRecentSessions(limit = 5) {
    try {
      const { rows } = await this.db.executeAsync(
        'SELECT * FROM sessions ORDER BY createdAt DESC LIMIT ?',
        [limit]
      );
      return rows;
    } catch (error) {
      console.error('Error getting recent sessions:', error.message);
      throw error;
    }
  }

  async getSessionById(sessionId) {
    try {
      const { rows } = await this.db.executeAsync(
        'SELECT * FROM sessions WHERE id = ?',
        [sessionId]
      );
      return rows[0] || null;
    } catch (error) {
      console.error('Error getting session:', error.message);
      throw error;
    }
  }
}

// Create and export a single instance
const sessionsDb = new SessionsDB();
export default sessionsDb;