var utils = require("./util.js");
var _globals = utils._globals;

var item = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var id       = options.id       ||                      cb("ERROR: No id given");

	var baseUrl = "https://eu.api.battle.net/wow/item/:id:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":id:",id).replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
};

var item_set = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var id       = options.id       ||                      cb("ERROR: No id given");

	var baseUrl = "https://eu.api.battle.net/wow/item/set/:id:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":id:",id).replace(":apikey:",apikey_p);
	utils.do_request(url,cb);
};

module.exports = {
	"item"     : item,
	"item_set" : item_set
}