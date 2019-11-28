# Qi I18N Node

> Other language / 其他语言  
> [English](./README.md) | [简体中文](./README.zh_CN.md)

A lightweight i18N module for NodeJS, with Prepared Statement like function provided.

## Install

```
npm i --save @qiqi1996/qi-i18n-node
```

## Usage

```javascript
import i18N from "../dist/index.js";

let scope = new i18N();

scope.add("error", scope.translation({
    "en": "Cannot read the property '?' of undefined",
    "zh_CN": "无法从 undefined 中读取 '?' 属性",
    "blah,blah...": "..."
}));
// "error" means the key name of the translations set.
// use `translation()` to wrap the translations object, which use the language as the key and the translation as its value.

console.error(scope["error"]("name"));
// Due to the default language is "en", so it will output "Cannot read the property 'name' of undefined"
scope.config.use("zh_CN");
// Change the using language to Chinese
console.error(scope["error"]("name"));
// At this time, it will output "无法从 undefined 中读取 'name' 属性"
scope.config.use("blah,blah...");
console.error(scope["error"]("name"));
// ...
```

If you don't want `?` to be replaced by arguments, please use `\\?`.

## License

MIT

Copyright (c) 2019~present, qiqi1996.com.