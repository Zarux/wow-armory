var request = require("request");

var _globals = {
    apikey: null,
    realm: null,
    region: null
};


var gen_url = function (options, type, cb) {
    var region_p = options.region || _globals.region || "EU";
    var realm_p = options.realm || _globals.realm || false;
    var apikey_p = options.apikey || _globals.apikey || false;
    var name = options.name || false;

    if (!realm_p){
        cb("ERROR: No realm given");
        return false;
    }
    if (!apikey_p){
        cb("ERROR: No apikey given");
        return false;
    }
    if (!name){
        cb("ERROR: No name given");
        return false;
    }

    var baseUrl = "https://:region:.api.battle.net/wow/:type:/:realm:/:name:?locale=en_GB&apikey=:apikey:&fields=:fields:";
    return baseUrl
        .replace(":type:", type)
        .replace(":region:", encodeURIComponent(region_p))
        .replace(":realm:", encodeURIComponent(realm_p))
        .replace(":name:", encodeURIComponent(name))
        .replace(":apikey:", apikey_p);
};

var do_request = function (url, cb) {
    request(url, function (error, response, body) {
        if(response && response.statusCode !== 200){
            cb("ERROR: HTTP RESPONSE "+response);
            return;
        }
        var data = JSON.parse(body);
        var errorMsg = null;
        if (!error && data.status === "nok")
            errorMsg = "ERROR: " + data.reason;
        if (error) errorMsg = error;

        return cb(errorMsg, data);
    });
};

module.exports = {
    "_globals": _globals,
    "gen_url": gen_url,
    "do_request": do_request
};
