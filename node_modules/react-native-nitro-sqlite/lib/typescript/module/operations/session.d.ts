import type { NitroSQLiteConnection, NitroSQLiteConnectionOptions } from '../types';
export declare function open(options: NitroSQLiteConnectionOptions): NitroSQLiteConnection;
export declare function openDb(dbName: string, location?: string): void;
export declare function close(dbName: string): void;
//# sourceMappingURL=session.d.ts.map