class Config {
    constructor(language) {
        this.using = language || "en";
    }

    use(language) {
        this.using = language;
    }
}

export default Config;