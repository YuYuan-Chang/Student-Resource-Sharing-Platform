//const { webpack } = require("next/dist/compiled/webpack/webpack");

module.exports = {
    webpack: (config) => {
        config.watchOptions.poll = 300;
        return config;
    },
};