function translationWrapper(...args) {
    let result = this.translation[this.config.using] || this.translation["en"];
    result = result.replace(/[^\\]\?{1}/g, function (match) {
        return match[0] + args.shift();
    });
    result = result.replace(/\\\?/g, "?");
    return result;
}

function translation (translation) {
    let config = this.config;
    return translationWrapper.bind({
        config,
        translation
    });
}

class Config {
    constructor(language) {
        this.using = language || "en";
    }

    use(language) {
        this.using = language;
    }
}

class i18N {
    constructor() {
        this.config = new Config();
        this.keys = new Array();
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
        if (this.keys.indexOf(key) == -1) {
            this.keys.push(key);
        }
        this[key] = translation;
    }
}

export default i18N;
