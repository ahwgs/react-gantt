import React from 'react'
import classNames from 'classnames'
import './RowToggler.less'

interface RowTogglerProps {
  onClick: React.DOMAttributes<HTMLDivElement>['onClick']
  collapsed: boolean
  level: number
  prefixCls?: string
}
const RowToggler: React.FC<RowTogglerProps> = ({ onClick, collapsed, level, prefixCls = '' }) => {
  const prefixClsRowToggler = `${prefixCls}-row-toggler`
  return (
    <div role='none' onClick={onClick} className={prefixClsRowToggler}>
      <div
        className={classNames(prefixClsRowToggler, {
          [`${prefixClsRowToggler}-collapsed`]: collapsed,
        })}
      >
        <i data-level={level}>
          {level <= 0 ? (
            <svg viewBox='0 0 1024 1024'>
              <path d='M296.704 409.6a14.9504 14.9504 0 0 0-10.752 4.608 15.5648 15.5648 0 0 0 0.1536 21.7088l210.8416 212.0704a24.832 24.832 0 0 0 35.584-0.256l205.5168-211.968a15.5136 15.5136 0 0 0 4.352-10.752c0-8.4992-6.7584-15.4112-15.104-15.4112h-430.592z' />
            </svg>
          ) : (
            <svg viewBox='0 0 1024 1024'>
              <path d='M296.704 409.6a14.9504 14.9504 0 0 0-10.752 4.608 15.5648 15.5648 0 0 0 0.1536 21.7088l210.8416 212.0704a24.832 24.832 0 0 0 35.584-0.256l205.5168-211.968a15.5136 15.5136 0 0 0 4.352-10.752c0-8.4992-6.7584-15.4112-15.104-15.4112h-430.592z' />
            </svg>
          )}
        </i>
      </div>
    </div>
  )
}
export default RowToggler
