import React from 'react';
import './RowToggler.less';
interface RowTogglerProps {
    onClick: React.DOMAttributes<HTMLDivElement>['onClick'];
    collapsed: boolean;
    level: number;
    prefixCls?: string;
}
declare const RowToggler: React.FC<RowTogglerProps>;
export default RowToggler;
