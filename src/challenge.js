var utils    = require("./util.js");
var _globals = utils._globals;

var rlm_leaderboard = function(options,cb){
	var region_p = options.region   || _globals.region   || "EU";
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var realm_p  = options.realm    || _globals.realm    || cb("ERROR: No realm given");

	var baseUrl = "https://:region:.api.battle.net/wow/challenge/:realm:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl
		.replace(":realm:",realm_p)
		.replace(":apikey:",apikey_p)
		.replace(":region:",region_p);
	utils.do_request(url,cb);
}

var rgn_leaderboard = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var region_p = options.region   || _globals.region   || "EU";

	var baseUrl = "https://:region:.api.battle.net/wow/challenge/region?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":region:",region_p).replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

module.exports = {
	"rlm_leaderboard" : rlm_leaderboard,
	"rgn_leaderboard" : rgn_leaderboard
}