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

## APIs

> let scope = new i18N();

### scope.translation(transObj);

- 类型：Function
- 参数：
    - `Object` transObj
- 返回值：Function

构造一个 `trasnlation` 函数, `transObj` 的结构应该类似于：

```javascript
{
    "en": "English ?",
    "zh_CN": "中文 ?",
    "ja": "日本语 ?"
    "...": "Other languages ?"
}
```
它将返回一个函数。并且在调用它时，将从 `transObj` 返回一个 `String`，并且每个 `?` 都会被传递给该函数的参数替换。

举个例子，如果我们调用 `translation` 并传入先前的 `transObj`，并通过`scope.config.use("en")` 将使用语言设置为英语，然后使用 `trasnlationFunction("Hello World")`。我们将获得 "English Hello World"。

如果你不希望 `?` 被参数替换掉，请使用 `\\?`。

### scope.config

- 类型：Object

设置当前使用的语言，用法：`scope.config.using = "language key"` 或 `scope.config.use()`。

### scope.add(key, translation);

- 类型：Function
- 返回值：Function

添加 translation 函数，与 `scope[key] = translation` 作用相同。

### scope.keys

- 类型：Array

All keys of translations.

### scope.get(key, ...args)

- 类型：Function
- 返回值：Function

获取（并调用） translation 函数，与 `scope[key](...args)` 作用相同。

### scope._(key)

- 类型：Function
- 返回值：Function

获取（并调用） translation 函数，与 `scope[key](...args)` 作用相同。

## License

MIT

Copyright (c) 2019~present, qiqi1996.com.