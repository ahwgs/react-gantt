/**
 * compact: true
 */

import RcGantt, { enUS } from 'rc-gantt';
import React from 'react';

interface Data {
  name: string;
  startDate: string;
  endDate: string;
}

const data = Array.from({ length: 100 }).fill({
  name: 'Title',
}) as Data[];

const App = () => (
  <div style={{ width: '100%', height: 500 }}>
    <RcGantt<Data>
      locale={enUS}
      data={data}
      columns={[
        {
          name: 'name',
          label: 'Title',
          width: 100,
        },
      ]}
      onUpdate={async (row, startDate, endDate) => {
        console.log('update', row, startDate, endDate);
        return true;
      }}
    />
  </div>
);

export default App;
