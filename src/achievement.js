var utils = require("./util.js");
var _globals = utils._globals;
var achievement = function (options, cb) {
    var apikey_p = options.apikey || _globals.apikey || false;
    var id = options.id || false;
    if(!id) return cb("ERROR: No id given");
    if(!apikey_p) return cb("ERROR: No apikey given");

    var baseUrl = "https://eu.api.battle.net/wow/achievement/:id:?locale=en_GB&apikey=:apikey:";
    var url = baseUrl.replace(":id:", id).replace(":apikey:", apikey_p);
    utils.do_request(url, cb);
};
module.exports = {
    "achievement": achievement
};
