/**
 * compact: true
 */

import dayjs from 'dayjs';
import RcGantt, { Gantt } from 'rc-gantt';
import React from 'react';

interface Data {
  name: string;
  startDate: string;
  endDate: string;
}

const data = [
  {
    name: '一个名称一个名称一个名称一个名称',
    startDate: dayjs().format('YYYY-MM-DD'),
    endDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),
    id: '1',
  },
  {
    name: '一个名称一个名称一个名称一个名称',
    startDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),
    endDate: dayjs().add(2, 'week').format('YYYY-MM-DD'),
    id: '2',
  },
  {
    name: '一个名称一个名称一个名称一个名称',
    startDate: dayjs().add(2, 'week').format('YYYY-MM-DD'),
    endDate: dayjs().add(3, 'week').format('YYYY-MM-DD'),
    id: '3',
  },
];

const dependencies: Gantt.Dependence[] = [
  {
    from: '1',
    to: '2',
    type: 'finish_start',
    color: 'blue',
  },
  {
    from: '2',
    to: '3',
    type: 'finish_start',
  },
];

const App = () => (
  <div style={{ width: '100%', height: 500 }}>
    <RcGantt<Data>
      dependencies={dependencies}
      data={data}
      columns={[
        {
          name: 'name',
          label: '名称',
        },
      ]}
      onUpdate={async () => true}
    />
  </div>
);

export default App;
