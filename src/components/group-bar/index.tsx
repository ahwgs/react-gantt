import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import { Gantt } from '../../types';
import { getMaxRange } from '../../utils';
import Context from '../../context';
import './index.less';
interface GroupBarProps {
  data: Gantt.Bar;
}
const height = 8;
const GroupBar: React.FC<GroupBarProps> = ({ data }) => {
  const { prefixCls, renderGroupBar } = useContext(Context);
  const { translateY } = data;
  const { translateX, width } = getMaxRange(data);
  return (
    <div
      role="none"
      className={classNames(`${prefixCls}-group-bar`)}
      style={{
        transform: `translate(${translateX}px, ${translateY}px)`,
      }}
    >
      <div>
        <div className={`${prefixCls}-bar`}>
          {renderGroupBar ? (
            renderGroupBar(data, {
              width,
              height,
            })
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width={width + 1}
              height={height + 8}
              viewBox={`0 0 ${width + 1} ${height + 8}`}
            >
              <path
                fill={data.record.background || '#7B809E'}
                d={`
              M${width - 2},0.5
              l-${width - 4},0
              c-0.41421,0 -0.78921,0.16789 -1.06066,0.43934
              c-0.27145,0.27145 -0.43934,0.64645 -0.43934,1.06066
              l0,13.65
              l6,-7
              l${width - 12},0
              l6,7
              l0,-13.65
              c-0.03256,-0.38255 -0.20896,-0.724 -0.47457,-0.97045
              c-0.26763,-0.24834 -0.62607,-0.40013 -1.01995,-0.40013z
            `}
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
export default observer(GroupBar);
