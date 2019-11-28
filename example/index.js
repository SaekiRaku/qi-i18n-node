import i18N from "../dist/index.js";

let scope = new i18N();

scope.add("error", scope.translation({
    "en": "Can not read the property '?' of undefined",
    "zh_CN": "无法从 undefined 中读取 '?' 属性"
}));

console.log(scope["error"]("name"));
scope.config.use("zh_CN");
console.log(scope["error"]("name"));
