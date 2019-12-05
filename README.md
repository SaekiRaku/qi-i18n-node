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

## APIs

> let scope = new i18N();

### scope.translation(transObj);

- Type: Function
- Parms:
    - `Object` transObj
- Return: Function

Make a `trasnlation function`, `transObj` should be like:

```javascript
{
    "en": "English ?",
    "zh_CN": "中文 ?",
    "ja": "日本语 ?"
    "...": "Other languages ?"
}
```

It will return a function. And when calling it, it will return a `String` from the `transObj`, and Every `?` will be replaced by the parameter that pass into the funcion.

For example, if we calling the `translation` and pass in previous `transObj`, and set the using language to "English" by `scope.config.use("en")`, and then call that function with `trasnlationFunction("Hello World")`. We will got `English Hello World`.

If you don't want `?` to be replaced by arguments, please use `\\?`.

### scope.config

- Type: Object

Use config to set the using language, by `scope.config.using = "language key"` or `scope.config.use()`;

### scope.add(key, translation);

- Type: Function
- Return: Function

Add translation function, as same as `scope[key] = translation`

### scope.keys

- Type: Array

All keys of translations.

### scope.get(key, ...args)

- Type: Function
- Return: Function

Get(and call) translation function, as same as `scope[key](...args)`

### scope._(key)

- Type: Function
- Return: Function

Get(and call) translation function, as same as `scope[key](...args)`

## License

MIT

Copyright (c) 2019~present, qiqi1996.com.