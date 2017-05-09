var utils = require("./util.js");
var _globals = utils._globals;

var realm_status = function (options, cb) {
    var region_p = options.region || _globals.region || "EU";
    var apikey_p = options.apikey || _globals.apikey || cb("ERROR: No apikey given");

    if (typeof options == "function") cb = options;

    var baseUrl = "https://:region:.api.battle.net/wow/realm/status?locale=en_GB&apikey=:apikey:";
    var url = baseUrl.replace(":apikey:", apikey_p).replace(":region:", region_p);
    utils.do_request(url, cb);
};

module.exports = {
    "realm_status": realm_status
};
