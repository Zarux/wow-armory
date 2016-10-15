var utils    = require("./util.js");
var _globals = utils._globals;

var guild = function(options,cb){
	url = utils.gen_url(options,"guild",cb);
	if(Array.isArray(options.fields)){
		options.fields = options.fields.join(",");
	}
	url = url.replace(":fields:",encodeURIComponent(options.fields));
	utils.do_request(url,cb);
};

module.exports = {
	"guild" : guild
}