var utils = require("./util.js");
var _globals = utils._globals;

var mounts = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/mount/?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

module.exports = {
	"mounts" : mounts
}