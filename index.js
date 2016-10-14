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
	url = gen_url(options);
	if(Array.isArray(options.fields)){
		options.fields = options.fields.join(",");
	}
	url = url.replace(":fields:",encodeURIComponent(options.fields));
	do_request(url,cb);
};

var guild = function(options,cb){
	url = gen_url(options);
	if(Array.isArray(options.fields)){
		options.fields = options.fields.join(",");
	}
	url = url.replace(":fields:",encodeURIComponent(options.fields));
	do_request(url,cb);
};

var achievement = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || er("No apikey");
	var id       = options.id       ||                      er("No id");

	var baseUrl = "https://eu.api.battle.net/wow/achievement/:id:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":id:",id).replace(":apikey:",apikey_p);
	do_request(url,cb);
}

var item = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || er("No apikey");
	var id       = options.id       ||                      er("No id");

	var baseUrl = "https://eu.api.battle.net/wow/item/:id:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":id:",id).replace(":apikey:",apikey_p);
	do_request(url,cb);	
}

var item_set = function(options,cb){
	var apikey_p = options.apikey   || _globals.apikey   || er("No apikey");
	var id       = options.id       ||                      er("No id");

	var baseUrl = "https://eu.api.battle.net/wow/item/set/:id:?locale=en_GB&apikey=:apikey:";
	var url = baseUrl.replace(":id:",id).replace(":apikey:",apikey_p);
	do_request(url,cb);	
}

var gen_url = function(options){
	var region_p = options.region   || _globals.region   || "EU";
	var realm_p  = options.realm    || _globals.realm    || er("No realm");
	var apikey_p = options.apikey   || _globals.apikey   || er("No apikey");
	var name     = options.name     ||                      er("No name");

	var url = baseUrl
		.replace(":type:","guild")
		.replace(":region:",encodeURIComponent(region_p))
		.replace(":realm:",encodeURIComponent(realm_p))
		.replace(":name:",encodeURIComponent(name))
		.replace(":apikey:",apikey_p);
	return url;
};

var do_request = function(url,cb){
	request(url, function (error, response, body) {
		if (response.statusCode == 200) {
			var data = JSON.parse(body);
			return cb(data);
		}
	});
}

var er = function(msg){
	throw new Error(msg);
}

module.exports = {
	"character":character,
	"guild":guild,
	"setOptions":setOptions,
	"achievement":achievement
};