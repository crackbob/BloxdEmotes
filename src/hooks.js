const hooks = {
    wpRequire: null,
    _cachedNoa: null,

    get noa () {
        if (!this?._cachedNoa) {
            this._cachedNoa = Object.values(this.bloxdProps).find(prop => prop?.entities);
        }

        return this._cachedNoa;
    },

    get noaShell () {
        if (!this?._cachedShell) {
            this._cachedShell = Object.values(this.noa.container).find(obj => obj?._data)._data;
        }

        return this._cachedShell;
    },

    init() {
        let winDescriptors = Object.getOwnPropertyDescriptors(window);
        let wpName = Object.keys(winDescriptors).find(key => winDescriptors[key]?.set?.toString().includes("++"));
        this.wpInstance = window[wpName] = window[wpName];
        let randomID = Math.floor(Math.random() * 9999999 + 1);
        this.wpInstance.push([[randomID], {}, require => this.wpRequire = require]);

        this.bloxdProps = Object.values(this.findModule("nonBlocksClient:")).find(prop => typeof prop == "object");
    },

    findModuleID(searchCode) {
        const modules = this.wpRequire.m;
        for (let id in modules) {
            const modFn = modules[id];
            if (modFn && modFn.toString().includes(searchCode)) {
                return id;
            }
        }

        return null;
    },

    findModule(searchCode) {
        return this.wpRequire(this.findModuleID(searchCode));
    },
};

export default hooks;