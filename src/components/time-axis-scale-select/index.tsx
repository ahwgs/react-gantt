import React, { useContext, useCallback, useState, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'
import { useClickAway } from 'ahooks'
import Context from '../../context'
import { viewTypeList } from '../../store'
import { Gantt } from '../../types'
import './index.less'

const TimeAxisScaleSelect: React.FC = () => {
  const { store, prefixCls } = useContext(Context)
  const { sightConfig, scrolling } = store
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useClickAway(() => {
    setVisible(false)
  }, ref)
  const handleClick = useCallback(() => {
    setVisible(true)
  }, [])
  const handleSelect = useCallback(
    (item: Gantt.SightConfig) => {
      store.switchSight(item.type)
      setVisible(false)
    },
    [store]
  )
  const selected = sightConfig.type
  const isSelected = useCallback((key: string) => key === selected, [selected])
  return (
    <div className={`${prefixCls}-time-axis-scale-select`} ref={ref}>
      <div role='none' className={`${prefixCls}-trigger`} onClick={handleClick}>
        <div className={`${prefixCls}-text`}>{sightConfig.label}</div>
        <span className='dropdown-icon'>
          <svg id='at-triangle-down-s' viewBox='0 0 1024 1024'>
            <path d='M296.704 409.6a14.9504 14.9504 0 0 0-10.752 4.608 15.5648 15.5648 0 0 0 0.1536 21.7088l210.8416 212.0704a24.832 24.832 0 0 0 35.584-0.256l205.5168-211.968a15.5136 15.5136 0 0 0 4.352-10.752c0-8.4992-6.7584-15.4112-15.104-15.4112h-430.592z' />
          </svg>
        </span>
      </div>
      <div
        className={classNames(`${prefixCls}-shadow`, {
          [`${prefixCls}-scrolling`]: scrolling,
        })}
      />
      {visible && (
        <div className={classNames('next-overlay-wrapper', 'opened')}>
          <div
            className={classNames('next-overlay-inner')}
            aria-hidden='false'
            style={{ position: 'absolute', right: 15, top: 60 }}
          >
            <div className='next-loading-wrap'>
              <ul role='listbox' className={classNames('next-menu')} aria-multiselectable='false'>
                {viewTypeList.map(item => (
                  <li
                    key={item.type}
                    role='none'
                    onClick={() => {
                      handleSelect(item)
                    }}
                    className={classNames('next-menu-item', {
                      'next-selected': isSelected(item.type),
                    })}
                  >
                    {isSelected(item.type) && (
                      <i className={`${prefixCls}-selected_icon`}>
                        <svg viewBox='0 0 1024 1024'>
                          <path d='M413.7472 768a29.5936 29.5936 0 0 1-21.6576-9.472l-229.5296-241.152a33.3824 33.3824 0 0 1 0-45.5168 29.696 29.696 0 0 1 43.4176 0l207.7696 218.368 404.2752-424.7552a29.5936 29.5936 0 0 1 43.4176 0 33.3824 33.3824 0 0 1 0 45.568l-425.984 447.488A29.5936 29.5936 0 0 1 413.696 768' />
                        </svg>
                      </i>
                    )}
                    <span className='next-menu-item-text' aria-selected='true'>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default observer(TimeAxisScaleSelect)
