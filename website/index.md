---
title: 'React Gantt Component'
hero:
  title: 'rc-gantt'
  desc: Gantt组件
  actions:
    - text: 快速上手 →
      link: /component

footer: Open-source MIT Licensed | Copyright © 2021<br />
---

## 快速使用

## 📦 安装依赖

```shell
$ yarn add rc-gantt  # or npm i rc-gantt -S
```

## 🔨 快速开始

```tsx
import RcGantt from 'rc-gantt'

// in react page
return (
  <RcGantt
    data={data}
    columns={[
      {
        name: 'name',
        label: '名称',
        width: 200,
      },
    ]}
    onUpdate={async () => {
      return true
    }}
  />
)
```

查看更多：[基础使用](/component#基础使用)

## 问题反馈

请访问 [Github](https://github.com/ahwgs/react-gantt/issues) 或加微信，备注 `rc-gantt`

<img src='https://static.ahwgs.cn/wp-content/uploads/2020/03/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200311210541.jpg' style='width:200px'/>
