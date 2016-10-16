var utils    = require("./util.js");
var _globals = utils._globals;

var battlegroups = function(options,cb){
	var region_p = options.region   || _globals.region   || "EU";
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://:region:.api.battle.net/wow/data/battlegroups/?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":apikey:",apikey_p).replace(":region:",region_p);
	utils.do_request(url,cb);
}

var races = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/data/character/races?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

var classes = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/data/character/classes?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

var char_achievements = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/data/character/achievements?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

var guild_rewards = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/data/guild/rewards?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

var guild_perks = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/data/guild/perks?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

var guild_achievements = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/data/guild/achievements?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

var item_classes = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/data/item/classes?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

var talents = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/data/talents?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

var pet_types = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/data/pet/types?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

module.exports = {
	"battlegroups"       : battlegroups,
	"races"              : races,
	"classes"            : classes,
	"char_achievements"  : char_achievements,
	"guild_rewards"      : guild_rewards,
	"guild_perks"        : guild_perks,
	"guild_achievements" : guild_achievements,
	"item_classes"       : item_classes,
	"talents"            : talents,
	"pet_types"          : pet_types
}