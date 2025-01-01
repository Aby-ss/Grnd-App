import type { Transaction } from '../types';
export interface PendingTransaction {
    start: () => void;
}
export declare const transaction: (dbName: string, fn: (tx: Transaction) => Promise<void> | void) => Promise<void>;
//# sourceMappingURL=transaction.d.ts.map