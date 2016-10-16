var request = require("request");

var _globals = {
	apikey:null,
	realm:null,
	region:null
};


var gen_url = function(options,type,cb){
	var region_p = options.region   || _globals.region   || "EU";
	var realm_p  = options.realm    || _globals.realm    || cb("ERROR: No realm given");
	var apikey_p = options.apikey   || _globals.apikey   || cb("ERROR: No apikey given");
	var name     = options.name     ||                      cb("ERROR: No name given");

	var baseUrl = "https://:region:.api.battle.net/wow/:type:/:realm:/:name:?locale=en_GB&apikey=:apikey:&fields=:fields:";
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
		if (!error && data.status == "nok")
			var errorMsg = "ERROR: "+data.reason;
		if(error) errorMsg = error;
		var data = JSON.parse(body);
		return cb(errorMsg,data);
	});
}

module.exports = {
	"_globals"   : _globals,
	"gen_url"    : gen_url,
	"do_request" : do_request
}