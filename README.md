# gulu 
## 一个简单的 Vue UI组件

[![Build Status](https://travis-ci.org/dashixiong-11/gulu.svg?branch=master)](https://travis-ci.org/dashixiong-11/gulu)

作者: 大师兄

## 介绍

## 开始使用

## 安装

使用本框架前，请先设置css:
```
*,*::befoer,*::after{ box-sizing:border-box; }
```
你还需要设置默认颜色等变量
```
html{
  --button-height:32px;
  --button-bg:white;
  --font-size:14px;
  --button-active-bg:#eee;
  --border-radius:4px;
  --color:#333;
  --border-color:#999;
  --border-color-hover:#666;
  }
```

IE 8 及以上支持。

2. 安装 gulu
```
npm i --save dashixiong-gulu
```
3. 引入gulu
```
import {Button,ButtonGroup,Icon} from 'dashixiong-gulu'
import 'dashixiong-gulu/dist/index.css'

export default{
    name:'app',
    components:{
    'g-button':Button,
    'g-icon':Icon,
    'g-button-group':ButtonGroup
    }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

