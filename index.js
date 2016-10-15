var utils    = require("./src/util.js");
var _globals = utils._globals;

var set_options = function(options){
	if(options.apikey) _globals.apikey  = options.apikey;
	if(options.realm)  _globals.realm   = options.realm;
	if(options.region) _globals.region  = options.region;
};

var character           = require("./src/character.js"      ).character;
var guild               = require("./src/guild.js"          ).guild;
var achievement         = require("./src/achievement.js"    ).achievement;
var item                = require("./src/item.js"           ).item;
var item_set            = require("./src/item.js"           ).item_set;
var auction             = require("./src/auction.js"        ).item_set;
var boss_list           = require("./src/boss.js"           ).boss_list;
var boss                = require("./src/boss.js"           ).boss;
var mounts              = require("./src/mount.js"          ).mounts;
var quest               = require("./src/quest.js"          ).quest;
var zone_list           = require("./src/zone.js"           ).zone_list;
var zone                = require("./src/zone.js"           ).zone;
var spell               = require("./src/spell.js"          ).spell;
var realm_status        = require("./src/realm.js"          ).realm_status;
var recipe              = require("./src/recipe.js"         ).recipe;
var pvp_leaderboard     = require("./src/pvp.js"            ).leaderboard;
var chl_rlm_leaderboard = require("./src/challenge.js"      ).rlm_leaderboard;
var chl_rgn_leaderboard = require("./src/challenge.js"      ).rgn_leaderboard;
var pet_list			= require("./src/pet.js"            ).pet_list;
var pet_abilities		= require("./src/pet.js"            ).pet_abilities;
var pet_species			= require("./src/pet.js"            ).pet_species;
var pet_species_stats   = require("./src/pet.js"            ).pet_species_stats;
var battlegroups 		= require("./src/data_resources.js" ).battlegroups;
var races 		        = require("./src/data_resources.js" ).races;
var classes 		    = require("./src/data_resources.js" ).classes;
var char_achievements   = require("./src/data_resources.js" ).char_achievements;
var guild_rewards 		= require("./src/data_resources.js" ).guild_rewards;
var guild_perks 		= require("./src/data_resources.js" ).guild_perks;
var guild_achievements 	= require("./src/data_resources.js" ).guild_achievements;
var item_classes 		= require("./src/data_resources.js" ).item_classes;
var talents 		    = require("./src/data_resources.js" ).talents;
var pet_types 		    = require("./src/data_resources.js" ).pet_types;

module.exports = {
	"character"           : character,
	"guild"               : guild,
	"setOptions"          : set_options,
	"achievement"         : achievement,
	"item"                : item,
	"item_set"            : item_set,
	"auction"             : auction,
	"boss_list"           : boss_list,
	"boss"                : boss,
	"mounts"              : mounts,
	"quest"               : quest,
	"zone_list"           : zone_list,
	"zone"                : zone,
	"spell"               : spell,
	"realm_status"        : realm_status,
	"recipe"              : recipe,
	"pvp_leaderboard"     : pvp_leaderboard,
	"chl_rlm_leaderboard" : chl_rlm_leaderboard,
	"chl_rgn_leaderboard" : chl_rgn_leaderboard,
	"pet_list"            : pet_list,
	"pet_abilities"       : pet_abilities,
	"pet_species"         : pet_species,
	"pet_species_stats"   : pet_species_stats,
	"battlegroups"        : battlegroups,
	"races"               : races,
	"classes"             : classes,
	"char_achievements"   : char_achievements,
	"guild_rewards"       : guild_rewards,
	"guild_perks"         : guild_perks,
	"guild_achievements"  : guild_achievements,
	"item_classes"        : item_classes,
	"talents"             : talents,
	"pet_types"           : pet_types
};