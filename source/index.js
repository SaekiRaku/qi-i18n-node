import translation from "./Translation.js";
import Config from "./Config.js";

class i18N {
    constructor() {
        this.config = new Config();
        this.translation = translation.bind({
            config: this.config
        });

        Object.freeze(this._);
        Object.freeze(this.get);
        Object.freeze(this.add);
        Object.freeze(this.translation);
    }

    _(key, ...args) {
        return this.get(key, ...args);
    }

    get(key, ...args) {
        if (args.legnth) {
            this[key](...args);
        } else {
            return this[key];
        }
    }

    add(key, translation) {
        this[key] = translation;
    }
}

export default i18N;