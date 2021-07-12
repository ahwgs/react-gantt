import React from 'react'
import * as ReactDOM from 'react-dom'
import Gantt from '../src'

describe('Basic', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Gantt
        data={[
          {
            name: '一个名称',
            startDate: '2020-10-01',
            endDate: '2020-10-08',
            collapsed: false,
            children: [
              {
                startDate: '2020-10-01',
                endDate: '2020-10-08',
                name: '一个名称',
                collapsed: false,
                children: [],
              },
            ],
          },
        ]}
        columns={[
          {
            name: 'name',
            label: '名称',
          },
        ]}
        onUpdate={async () => true}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
