class timezone_module {

    // Constructor
    constructor() { return require('./files/constructor').apply(this, arguments); }

    // Set Secondary Timezone
    setSecondary() { return require('./files/setSecondary').apply(this, arguments); }

    // List Generator
    getNames() { if (!this.names) { this.names = this.tz.names(); } return this.names; }

    // Get Main Timezone
    getMainTimezone() { return this.main; }

    // Get Primary Timezone
    getPrimary() { return this.cfg; }
    getPrimaryValue() { return this.cfg.actived; }

    // Get Secondary Timezone
    getSecondary() { return this.cfgSecondary; }
    getSecondaryValue() { return this.cfgSecondary.actived; }

    // Get Clock Config
    getClockCfg() { return this.clockCfg; }

    // Get Clock Config
    convertUTC() { return require('./files/convertUTC').apply(this, arguments); }

    // Set Cookie
    setCookie() { return require('./files/setCookie').apply(this, arguments); }

    // Get Client Web
    getClientWeb() { return require('./files/clientWeb').toString(); }

    // Get Moment Module
    getMoment() { return this.module; }

};

module.exports = timezone_module;