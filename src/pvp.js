var utils    = require("./util.js");
var _globals = utils._globals;

var leaderboard = function(options,cb){
	var region_p = options.region   || _globals.region   || "EU";
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var bracket  = options.bracket  ||                      cb("ERROR: No bracket given");

	var baseUrl = "https://:region:.api.battle.net/wow/leaderboard/:bracket:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl
		.replace(":bracket:",bracket)
		.replace(":apikey:",apikey_p)
		.replace(":region",region_p);
	utils.do_request(url,cb);
}

module.exports = {
	"leaderboard" : leaderboard
}