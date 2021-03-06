class timezone_module {

    // Constructor
    constructor() { return require('./constructor').apply(this, arguments); }

    // Get URLs
    getUrls() { return this.urls; }

    // Set Secondary Timezone
    setSecondary() { return require('./setSecondary').apply(this, arguments); }

    // List Generator
    getNames() { if (!this.names) { this.names = this.moment.tz.names(); } return this.names; }

    // Get List
    loadList() { return require('./loadList').apply(this, arguments); }

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

    // UTC
    convertUTC() { return require('./convertUTC').apply(this, arguments); }
    createUTC() { return require('./createUTC').apply(this, arguments); }
    getUTCValue() { return this.utcValue; }

    // Set Cookie
    setTime() { return require('./setTime').apply(this, arguments); }

    // Execute TIme
    execTime() { return require('./execTime').apply(this, arguments); }

    // Get Client Web
    getClientWeb() { return require('./clientWeb').apply(this, arguments); }

    // Get Moment Module
    getMoment() { return this.moment; }

    // Get File
    getFile(item) { if (typeof this.files[item] === "string") { return this.files[item]; } else { return ''; } }

};

module.exports = timezone_module;