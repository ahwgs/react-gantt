import type { Dayjs } from 'dayjs';
import type React from 'react';
export type DefaultRecordType = Record<string, any>;
export declare enum EGanttSightValues {
    day = 2880,
    week = 3600,
    month = 14400,
    quarter = 86400,
    halfYear = 115200
}
export declare namespace Gantt {
    interface Major {
        width: number;
        left: number;
        label: string;
        key: string;
    }
    interface MajorAmp {
        label: string;
        startDate: Dayjs;
        endDate: Dayjs;
    }
    interface Minor {
        width: number;
        left: number;
        label: string;
        isWeek: boolean;
        key: string;
    }
    interface MinorAmp {
        label: string;
        startDate: Dayjs;
        endDate: Dayjs;
    }
    type Sight = 'day' | 'week' | 'month' | 'quarter' | 'halfYear';
    type MoveType = 'left' | 'right' | 'move' | 'create';
    interface SightConfig {
        type: Sight;
        label: string;
        value: EGanttSightValues;
    }
    interface Bar<RecordType = DefaultRecordType> {
        key: React.Key;
        label: string;
        width: number;
        translateX: number;
        translateY: number;
        stepGesture: string;
        invalidDateRange: boolean;
        dateTextFormat: (startX: number) => string;
        getDateWidth: (startX: number, endX: number) => string;
        task: Item<RecordType>;
        record: Record<RecordType>;
        loading: boolean;
        _group?: boolean;
        _collapsed: boolean;
        _depth: number;
        _index?: number;
        _childrenCount: number;
        _parent?: Item<RecordType>;
    }
    interface Item<RecordType = DefaultRecordType> {
        record: Record<RecordType>;
        key: React.Key;
        startDate: string | null;
        endDate: string | null;
        content: string;
        collapsed: boolean;
        group?: boolean;
        children?: Item<RecordType>[];
        _parent?: Item<RecordType>;
        _bar?: Bar<RecordType>;
        _depth?: number;
        _index?: number;
    }
    type Record<RecordType = DefaultRecordType> = RecordType & {
        group?: boolean;
        borderColor?: string;
        backgroundColor?: string;
        collapsed?: boolean;
        children?: Record<RecordType>[];
        disabled?: boolean;
    };
    type ColumnAlign = 'center' | 'right' | 'left';
    interface Column<RecordType = DefaultRecordType> {
        width?: number;
        minWidth?: number;
        maxWidth?: number;
        flex?: number;
        name: string;
        label: string;
        style?: object;
        render?: (item: Record<RecordType>) => React.ReactNode;
        align?: ColumnAlign;
    }
    type DependenceType = 'start_finish' | 'finish_start' | 'start_start' | 'finish_finish';
    interface Dependence {
        from: string;
        to: string;
        type: DependenceType;
        color?: string;
    }
}
