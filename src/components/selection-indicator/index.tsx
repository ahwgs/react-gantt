import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Context from '../../context';
import './index.less';

/**
 * 鼠标hover效果模拟
 */
const SelectionIndicator: React.FC = () => {
  const { store, prefixCls } = useContext(Context);
  const { showSelectionIndicator, selectionIndicatorTop, rowHeight } = store;
  const prefixClsSelectionIndicator = `${prefixCls}-selection-indicator`;
  return showSelectionIndicator ? (
    <div
      className={prefixClsSelectionIndicator}
      style={{
        height: rowHeight,
        top: selectionIndicatorTop,
      }}
    />
  ) : null;
};
export default observer(SelectionIndicator);
