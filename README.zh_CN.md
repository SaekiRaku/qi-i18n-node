# Qi I18N Node

> Other language / 其他语言  
> [English](./README.md) | [简体中文](./README.zh_CN.md)

一个用于 NodeJS 的轻量级 i18N（国际化）模块，并提供了类似 `Prepared Statement` 的功能。

## 安装

```
npm i --save @qiqi1996/qi-i18n-node
```

## 使用方法

```javascript
import i18N from "../dist/index.js";

let scope = new i18N();

scope.add("error", scope.translation({
    "en": "Cannot read the property '?' of undefined",
    "zh_CN": "无法从 undefined 中读取 '?' 属性",
    "blah,blah...": "..."
}));
// "error" 表示翻译集的键名
// 使用 `translation()` 来包裹翻译对象, 该对象使用语言作为键名，使用翻译内容作为值.

console.error(scope["error"]("name"));
// 由于默认语言是 "en"，所以将输出 "Cannot read the property 'name' of undefined"
scope.config.use("zh_CN");
// 将语言改为简体中文
console.error(scope["error"]("name"));
// 此时，将输出 "无法从 undefined 中读取 'name' 属性"
scope.config.use("blah,blah...");
console.error(scope["error"]("name"));
// ...
```

如果你不希望 `?` 被参数替换掉，请使用 `\\?`。

## License

MIT

Copyright (c) 2019~present, qiqi1996.com.