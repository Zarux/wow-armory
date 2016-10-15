var request = require('request');
var utils = require("./src/util.js");

var _globals = utils._globals;

var setOptions = function(options){
	if(options.apikey) _globals.apikey  = options.apikey;
	if(options.realm)  _globals.realm   = options.realm;
	if(options.region) _globals.region  = options.region;
};

var character   = require("./src/character.js"   ).character;
var guild       = require("./src/guild.js"       ).guild;
var achievement = require("./src/achievement.js" ).achievement;
var item        = require("./src/item.js"        ).item;
var item_set    = require("./src/item.js"        ).item_set;
var auction     = require("./src/auction.js"     ).item_set;
var boss_list   = require("./src/boss.js"        ).boss_list;
var boss        = require("./src/boss.js"        ).boss;
var mounts      = require("./src/mount.js"       ).mounts;
var quest       = require("./src/quest.js"       ).quest;




module.exports = {
	"character"   : character,
	"guild"       : guild,
	"setOptions"  : setOptions,
	"achievement" : achievement,
	"item"        : item,
	"item_set"    : item_set,
	"auction"     : auction,
	"boss_list"   : boss_list,
	"boss"        : boss,
	"mounts"      : mounts,
	"quest"       : quest
};