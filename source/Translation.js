function translationWrapper(...args) {
    let result = this.translation[this.config.using] || this.translation["en"];
    result = result.replace(/[^\\]\?{1}/g, function (match) {
        return match[0] + args.shift();
    });
    result = result.replace(/\\\?/g, "?");
    return result;
}

export default function (translation) {
    let config = this.config;
    return translationWrapper.bind({
        config,
        translation
    });
}