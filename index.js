var request = require('request');
var _globals = {
	apikey:null,
	realm:null,
	region:null
};

var baseUrl = "https://:region:.api.battle.net/wow/:type:/:realm:/:name:?locale=en_GB&apikey=:apikey:&fields=:fields:";

var setOptions = function(options){
	if(options.apikey) _globals.apikey  = options.apikey;
	if(options.realm)  _globals.realm   = options.realm;
	if(options.region) _globals.region  = options.region;
};

var character = function(options,cb){
	url = gen_url(options,"character",cb);
	if(Array.isArray(options.fields)){
		options.fields = options.fields.join(",");
	}
	url = url.replace(":fields:",encodeURIComponent(options.fields));

	do_request(url,cb);
};

var guild = function(options,cb){
	url = gen_url(options,"guild",cb);
	if(Array.isArray(options.fields)){
		options.fields = options.fields.join(",");
	}
	url = url.replace(":fields:",encodeURIComponent(options.fields));
	do_request(url,cb);
};

var achievement = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var id       = options.id       ||                      cb("ERROR: No id given");

	var baseUrl = "https://eu.api.battle.net/wow/achievement/:id:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":id:",id).replace(":apikey:",apikey_p);
	do_request(url,cb);
}

var item = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var id       = options.id       ||                      cb("ERROR: No id given");

	var baseUrl = "https://eu.api.battle.net/wow/item/:id:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":id:",id).replace(":apikey:",apikey_p);
	do_request(url,cb);	
}

var item_set = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var id       = options.id       ||                      cb("ERROR: No id given");

	var baseUrl = "https://eu.api.battle.net/wow/item/set/:id:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":id:",id).replace(":apikey:",apikey_p);
	do_request(url,cb);	
}

var gen_url = function(options,type,cb){
	var region_p = options.region   || _globals.region   || "EU";
	var realm_p  = options.realm    || _globals.realm    || cb("ERROR: No realm given");
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var name     = options.name     ||                      cb("ERROR: No name given");

	var url = baseUrl
		.replace(":type:",type)
		.replace(":region:",encodeURIComponent(region_p))
		.replace(":realm:",encodeURIComponent(realm_p))
		.replace(":name:",encodeURIComponent(name))
		.replace(":apikey:",apikey_p);
	return url;
};

var do_request = function(url,cb){
	request(url, function (error, response, body) {
		var data = JSON.parse(body);
		if (!error && data.status == "nok")
			var errorMsg = "ERROR: "+data.reason;
		if(error) errorMsg = error;
		return cb(errorMsg,data);
	});
}

module.exports = {
	"character":character,
	"guild":guild,
	"setOptions":setOptions,
	"achievement":achievement,
	"item":item,
	"item_set":item_set
};