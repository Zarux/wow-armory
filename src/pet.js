var utils    = require("./util.js");
var _globals = utils._globals;

var pet_list = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/pet/?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

var pet_abilities = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var id       = options.id       ||                      cb("ERROR: No id given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/pet/ability/:id:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":id:",id).replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

var pet_species = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var id       = options.id       ||                      cb("ERROR: No id given");

	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/pet/species/:id:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":id:",id).replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

var pet_species_stats = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var id       = options.id       ||                      cb("ERROR: No id given");
	
	if (typeof options == "function") cb = options;

	var baseUrl = "https://eu.api.battle.net/wow/pet/stats/:id:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":id:",id).replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
}

module.exports = {
	"pet_list"          : pet_list,
	"pet_abilities"     : pet_abilities,
	"pet_species"       : pet_species,
	"pet_species_stats"  : pet_species_stats
}