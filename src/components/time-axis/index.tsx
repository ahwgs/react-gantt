import React, { useCallback, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import DragResize from '../drag-resize';
import Context from '../../context';

import './index.less';

const TimeAxis: React.FC = () => {
  const { store, prefixCls } = useContext(Context);
  const prefixClsTimeAxis = `${prefixCls}-time-axis`;
  const majorList = store.getMajorList();
  const minorList = store.getMinorList();
  const handleResize = useCallback(
    ({ x }) => {
      store.handlePanMove(-x);
    },
    [store]
  );
  const handleLeftResizeEnd = useCallback(() => {
    store.handlePanEnd();
  }, [store]);
  return (
    <DragResize
      onResize={handleResize}
      onResizeEnd={handleLeftResizeEnd}
      defaultSize={{
        x: -store.translateX,
        width: 0,
      }}
      type="move"
    >
      <div
        className={prefixClsTimeAxis}
        style={{
          left: store.tableWidth,
          width: store.viewWidth,
        }}
      >
        <div
          className={`${prefixClsTimeAxis}-render-chunk`}
          style={{
            transform: `translateX(-${store.translateX}px`,
          }}
        >
          {majorList.map((item) => (
            <div
              key={item.key}
              className={`${prefixClsTimeAxis}-major`}
              style={{ width: item.width, left: item.left }}
            >
              <div className={`${prefixClsTimeAxis}-major-label`}>
                {item.label}
              </div>
            </div>
          ))}
          {minorList.map((item) => (
            <div
              key={item.key}
              className={classNames(`${prefixClsTimeAxis}-minor`, {
                // [styles.weekends]: item.isWeek,
              })}
              style={{ width: item.width, left: item.left }}
            >
              <div className={`${prefixClsTimeAxis}-minor-label`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DragResize>
  );
};
export default observer(TimeAxis);
