import { useCallback, useRef } from 'react';

/**
 * Compatibility shim for ahooks usePersistFn
 * Creates a function that maintains the same reference across renders
 * while always calling the latest version of the function
 */
export function usePersistFn(fn) {
  var fnRef = useRef(fn);
  fnRef.current = fn;
  var persistFn = useCallback(function () {
    return fnRef.current.apply(fnRef, arguments);
  }, []);
  return persistFn;
}