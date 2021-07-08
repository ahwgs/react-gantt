import React, { useCallback, useRef, useState } from 'react';
import { usePersistFn } from 'ahooks';

export default function useDragResize(
  handleResize: ({ width }: { width: number }) => void,
  {
    initSize,
    minWidth: minWidthConfig,
    maxWidth: maxWidthConfig,
  }: {
    initSize: {
      width: number;
    };
    minWidth?: number;
    maxWidth?: number;
  }
): [(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void, boolean] {
  const [resizing, setResizing] = useState(false);
  const positionRef = useRef({
    left: 0,
  });
  const initSizeRef = useRef(initSize);
  const handleMouseMove = usePersistFn(async (event: MouseEvent) => {
    const distance = event.clientX - positionRef.current.left;
    let width = initSizeRef.current.width + distance;
    if (minWidthConfig !== undefined) {
      width = Math.max(width, minWidthConfig);
    }
    if (maxWidthConfig !== undefined) {
      width = Math.min(width, maxWidthConfig);
    }
    handleResize({ width });
  });
  const handleMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    setResizing(false);
  }, [handleMouseMove]);
  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      positionRef.current.left = event.clientX;
      initSizeRef.current = initSize;
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      setResizing(true);
    },
    [handleMouseMove, handleMouseUp, initSize]
  );
  return [handleMouseDown, resizing];
}
