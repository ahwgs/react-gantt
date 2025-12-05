/**
 * Compatibility shim for ahooks usePersistFn
 * Creates a function that maintains the same reference across renders
 * while always calling the latest version of the function
 */
export declare function usePersistFn<T extends (...args: any[]) => any>(fn: T): T;
