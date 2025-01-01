"use strict";

//   _________     _______  ______ ____  _____  __  __            _____ _____
//  |__   __\ \   / /  __ \|  ____/ __ \|  __ \|  \/  |     /\   |  __ \_   _|
//     | |   \ \_/ /| |__) | |__ | |  | | |__) | \  / |    /  \  | |__) || |
//     | |    \   / |  ___/|  __|| |  | |  _  /| |\/| |   / /\ \ |  ___/ | |
//     | |     | |  | |    | |___| |__| | | \ \| |  | |  / ____ \| |    _| |_
//     |_|     |_|  |_|    |______\____/|_|  \_\_|  |_| /_/    \_\_|   |_____|

import * as Operations from "./operations/session.js";
/**
 * DO NOT USE THIS! THIS IS MEANT FOR TYPEORM
 * If you are looking for a convenience wrapper use `connect`
 */
export const typeORMDriver = {
  openDatabase: (options, ok, fail) => {
    try {
      const db = Operations.open(options);
      const connection = {
        executeSql: async (sql, params, okExecute, failExecute) => {
          try {
            const result = await db.executeAsync(sql, params);
            okExecute(result);
          } catch (e) {
            failExecute(e);
          }
        },
        transaction: fn => {
          return db.transaction(fn);
        },
        close: (okClose, failClose) => {
          try {
            db.close();
            okClose();
          } catch (e) {
            failClose(e);
          }
        },
        attach: (dbNameToAttach, alias, location, callback) => {
          db.attach(dbNameToAttach, alias, location);
          callback();
        },
        detach: (alias, callback) => {
          db.detach(alias);
          callback();
        }
      };
      ok(connection);
      return connection;
    } catch (e) {
      fail(e);
      return null;
    }
  }
};
//# sourceMappingURL=typeORM.js.map