import { useCallback, useRef } from 'react';

/**
 * Compatibility shim for ahooks usePersistFn
 * Creates a function that maintains the same reference across renders
 * while always calling the latest version of the function
 */
export function usePersistFn<T extends (...args: any[]) => any>(fn: T): T {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  const persistFn = useCallback(
    ((...args: any[]) => {
      return fnRef.current(...args);
    }) as T,
    []
  );

  return persistFn;
}

