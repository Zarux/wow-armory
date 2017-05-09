var utils = require("./util.js");
var _globals = utils._globals;

var zone_list = function (options, cb) {
    var apikey_p = options.apikey || _globals.apikey || cb("ERROR: No apikey given");

    if (typeof options == "function") cb = options;

    var baseUrl = "https://eu.api.battle.net/wow/zone/?locale=en_GB&apikey=:apikey:";
    var url = baseUrl.replace(":apikey:", apikey_p);
    utils.do_request(url, cb);
}

var zone = function (options, cb) {
    var apikey_p = options.apikey || _globals.apikey || cb("ERROR: No apikey given");
    var id = options.id || cb("ERROR: No id given");

    var baseUrl = "https://eu.api.battle.net/wow/zone/:id:?locale=en_GB&apikey=:apikey:";
    var url = baseUrl.replace(":id:", id).replace(":apikey:", apikey_p);
    utils.do_request(url, cb);
}

module.exports = {
    "zone_list": zone_list,
    "zone": zone
};
