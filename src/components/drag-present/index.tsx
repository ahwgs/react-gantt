import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Context from '../../context';

/**
 * 拖动时的提示条
 */
const DragPresent: React.FC = () => {
  const { store } = useContext(Context);
  const { dragging, draggingType, bodyScrollHeight } = store;

  if (!dragging) {
    return null;
  }
  // 和当前拖动的块一样长
  const { width, translateX } = dragging;
  const left = translateX;
  const right = translateX + width;
  const leftLine = draggingType === 'left' || draggingType === 'move';
  const rightLine = draggingType === 'right' || draggingType === 'move';
  return (
    <g fill="#DAE0FF" stroke="#7B90FF">
      {leftLine && <path d={`M${left},0 L${left},${bodyScrollHeight}`} />}
      <rect
        x={left}
        y="0"
        width={width}
        height={bodyScrollHeight}
        strokeWidth="0"
      />
      {rightLine && <path d={`M${right},0 L${right},${bodyScrollHeight}`} />}
    </g>
  );
};
export default observer(DragPresent);
