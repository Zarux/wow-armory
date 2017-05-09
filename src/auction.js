var utils = require("./util.js");
var _globals = utils._globals;

var auction = function (options, cb) {
    var region_p = options.region || _globals.region || "EU";
    var apikey_p = options.apikey || _globals.apikey || false;
    var realm_p = options.realm || _globals.realm || false;

    if (!realm_p) return cb("ERROR: No realm given");
    if (!apikey_p) return cb("ERROR: No apikey given");

    if (typeof options == "function") cb = options;

    var baseUrl = "https://:region:.api.battle.net/wow/auction/data/:realm:?locale=en_GB&apikey=:apikey:";
    var url = baseUrl
        .replace(":region:", encodeURIComponent(region_p))
        .replace(":realm:", encodeURIComponent(realm_p))
        .replace(":apikey:", apikey_p);
    utils.do_request(url, cb);
};

module.exports = {
    "auction": auction
};
