var utils = require("./util.js");
var _globals = utils._globals;

var recipe = function (options, cb) {
    var apikey_p = options.apikey || _globals.apikey || false;
    if(!apikey_p) return cb("ERROR: No apikey given");
    var id = options.id || false;
    if(!id) return cb("ERROR: No id given");

    var baseUrl = "https://eu.api.battle.net/wow/recipe/:id:?locale=en_GB&apikey=:apikey:";
    var url = baseUrl.replace(":id:", id).replace(":apikey:", apikey_p);
    utils.do_request(url, cb);
};

module.exports = {
    "recipe": recipe
};
