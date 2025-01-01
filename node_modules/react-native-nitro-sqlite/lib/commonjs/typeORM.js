"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeORMDriver = void 0;
var Operations = _interopRequireWildcard(require("./operations/session.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
//   _________     _______  ______ ____  _____  __  __            _____ _____
//  |__   __\ \   / /  __ \|  ____/ __ \|  __ \|  \/  |     /\   |  __ \_   _|
//     | |   \ \_/ /| |__) | |__ | |  | | |__) | \  / |    /  \  | |__) || |
//     | |    \   / |  ___/|  __|| |  | |  _  /| |\/| |   / /\ \ |  ___/ | |
//     | |     | |  | |    | |___| |__| | | \ \| |  | |  / ____ \| |    _| |_
//     |_|     |_|  |_|    |______\____/|_|  \_\_|  |_| /_/    \_\_|   |_____|

/**
 * DO NOT USE THIS! THIS IS MEANT FOR TYPEORM
 * If you are looking for a convenience wrapper use `connect`
 */
const typeORMDriver = exports.typeORMDriver = {
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