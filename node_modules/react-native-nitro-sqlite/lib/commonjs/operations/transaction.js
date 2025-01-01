"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transaction = void 0;
var _nitro = require("../nitro.js");
var _execute = require("./execute.js");
const transaction = (dbName, fn) => {
  if (_nitro.locks[dbName] == null) throw Error(`Nitro SQLite Error: No lock found on db: ${dbName}`);
  let isFinalized = false;

  // Local transaction context object implementation
  const executeOnTransaction = (query, params) => {
    if (isFinalized) {
      throw Error(`Nitro SQLite Error: Cannot execute query on finalized transaction: ${dbName}`);
    }
    return (0, _execute.execute)(dbName, query, params);
  };
  const executeAsyncOnTransaction = (query, params) => {
    if (isFinalized) {
      throw Error(`Nitro SQLite Error: Cannot execute query on finalized transaction: ${dbName}`);
    }
    return (0, _execute.executeAsync)(dbName, query, params);
  };
  const commit = () => {
    if (isFinalized) {
      throw Error(`Nitro SQLite Error: Cannot execute commit on finalized transaction: ${dbName}`);
    }
    const result = _nitro.HybridNitroSQLite.execute(dbName, 'COMMIT');
    isFinalized = true;
    return result;
  };
  const rollback = () => {
    if (isFinalized) {
      throw Error(`Nitro SQLite Error: Cannot execute rollback on finalized transaction: ${dbName}`);
    }
    const result = _nitro.HybridNitroSQLite.execute(dbName, 'ROLLBACK');
    isFinalized = true;
    return result;
  };
  async function run() {
    try {
      await _nitro.HybridNitroSQLite.executeAsync(dbName, 'BEGIN TRANSACTION');
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
      _nitro.locks[dbName].inProgress = false;
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
    _nitro.locks[dbName]?.queue.push(tx);
    startNextTransaction(dbName);
  });
};
exports.transaction = transaction;
function startNextTransaction(dbName) {
  if (_nitro.locks[dbName] == null) throw Error(`Lock not found for db: ${dbName}`);
  if (_nitro.locks[dbName].inProgress) {
    // Transaction is already in process bail out
    return;
  }
  if (_nitro.locks[dbName].queue.length > 0) {
    _nitro.locks[dbName].inProgress = true;
    const tx = _nitro.locks[dbName].queue.shift();
    setImmediate(() => {
      tx.start();
    });
  }
}
//# sourceMappingURL=transaction.js.map