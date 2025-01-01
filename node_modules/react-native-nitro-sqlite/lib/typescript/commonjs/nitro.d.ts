import type { NitroSQLite as NitroSQLiteSpec } from './specs/NitroSQLite.nitro';
import type { PendingTransaction } from './operations/transaction';
export declare const HybridNitroSQLite: NitroSQLiteSpec;
export declare const locks: Record<string, {
    queue: PendingTransaction[];
    inProgress: boolean;
}>;
//# sourceMappingURL=nitro.d.ts.map