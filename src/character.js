var utils = require("./util.js");
var _globals = utils._globals;

var character = function(options,cb){
	url = utils.gen_url(options,"character",cb);
	if(Array.isArray(options.fields)){
		options.fields = options.fields.join(",");
	}
	url = url.replace(":fields:",encodeURIComponent(options.fields));

	utils.do_request(url,cb);
};

module.exports = {
	"character":character
}