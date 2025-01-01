"use strict";

import { locks, HybridNitroSQLite } from "../nitro.js";
import { execute, executeAsync } from "./execute.js";
export const transaction = (dbName, fn) => {
  if (locks[dbName] == null) throw Error(`Nitro SQLite Error: No lock found on db: ${dbName}`);
  let isFinalized = false;

  // Local transaction context object implementation
  const executeOnTransaction = (query, params) => {
    if (isFinalized) {
      throw Error(`Nitro SQLite Error: Cannot execute query on finalized transaction: ${dbName}`);
    }
    return execute(dbName, query, params);
  };
  const executeAsyncOnTransaction = (query, params) => {
    if (isFinalized) {
      throw Error(`Nitro SQLite Error: Cannot execute query on finalized transaction: ${dbName}`);
    }
    return executeAsync(dbName, query, params);
  };
  const commit = () => {
    if (isFinalized) {
      throw Error(`Nitro SQLite Error: Cannot execute commit on finalized transaction: ${dbName}`);
    }
    const result = HybridNitroSQLite.execute(dbName, 'COMMIT');
    isFinalized = true;
    return result;
  };
  const rollback = () => {
    if (isFinalized) {
      throw Error(`Nitro SQLite Error: Cannot execute rollback on finalized transaction: ${dbName}`);
    }
    const result = HybridNitroSQLite.execute(dbName, 'ROLLBACK');
    isFinalized = true;
    return result;
  };
  async function run() {
    try {
      await HybridNitroSQLite.executeAsync(dbName, 'BEGIN TRANSACTION');
      await fn({
        commit,
        execute: executeOnTransaction,
        executeAsync: executeAsyncOnTransaction,
        rollback
      });
      if (!isFinalized) commit();
    } catch (executionError) {
      if (!isFinalized) {
        try {
          rollback();
        } catch (rollbackError) {
          throw rollbackError;
        }
      }
      throw executionError;
    } finally {
      locks[dbName].inProgress = false;
      isFinalized = false;
      startNextTransaction(dbName);
    }
  }
  return new Promise((resolve, reject) => {
    const tx = {
      start: () => {
        run().then(resolve).catch(reject);
      }
    };
    locks[dbName]?.queue.push(tx);
    startNextTransaction(dbName);
  });
};
function startNextTransaction(dbName) {
  if (locks[dbName] == null) throw Error(`Lock not found for db: ${dbName}`);
  if (locks[dbName].inProgress) {
    // Transaction is already in process bail out
    return;
  }
  if (locks[dbName].queue.length > 0) {
    locks[dbName].inProgress = true;
    const tx = locks[dbName].queue.shift();
    setImmediate(() => {
      tx.start();
    });
  }
}
//# sourceMappingURL=transaction.js.map