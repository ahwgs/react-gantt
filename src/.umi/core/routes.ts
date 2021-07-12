// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/ahwgs/Desktop/workspace/rc-gantt/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/Users/ahwgs/Desktop/workspace/rc-gantt/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/Users/ahwgs/Desktop/workspace/rc-gantt/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/Users/ahwgs/Desktop/workspace/rc-gantt/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('/Users/ahwgs/Desktop/workspace/rc-gantt/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/component",
        "component": require('/Users/ahwgs/Desktop/workspace/rc-gantt/website/component.md').default,
        "exact": true,
        "meta": {
          "filePath": "website/component.md",
          "updatedTime": 1626087605083,
          "title": "组件",
          "nav": {
            "path": "/component",
            "title": "组件总览",
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "组件",
              "heading": "组件"
            },
            {
              "depth": 3,
              "value": "基础使用",
              "heading": "基础使用"
            },
            {
              "depth": 3,
              "value": "",
              "heading": ""
            }
          ]
        },
        "title": "组件"
      },
      {
        "path": "/",
        "component": require('/Users/ahwgs/Desktop/workspace/rc-gantt/website/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "website/index.md",
          "updatedTime": 1626087623135,
          "title": "React Gantt Component",
          "hero": {
            "title": "rc-gantt",
            "desc": "<div class=\"markdown\"><p>Gantt组件</p></div>",
            "actions": [
              {
                "text": "快速上手 →",
                "link": "/component"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2021<br /></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "快速使用",
              "heading": "快速使用"
            },
            {
              "depth": 2,
              "value": "问题反馈",
              "heading": "问题反馈"
            }
          ]
        },
        "title": "React Gantt Component"
      }
    ],
    "title": "rc-gantt",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
