# Documentation

* [`set_options`](#set_options)
* [`character`](#character)
* [`guild`](#guild)
* [`achievement`](#achievement)
* [`item`](#item)
* [`item_set`](#item_set)
* [`auction`](#auction)
* [`boss_list`](#boss_list)
* [`boss`](#boss)
* [`mounts`](#mounts)
* [`quest`](#quest)
* [`zone_list`](#zone_list)
* [`zone`](#zone)
* [`spell`](#spell)
* [`realm_status`](#realm_status)
* [`recipe`](#recipe)
* [`pvp_leaderboard`](#pvp_leaderboard)
* [`chl_rlm_leaderboard`](#chl_rlm_leaderboard)
* [`chl_rgn_leaderboard`](#chl_rgn_leaderboard)
* [`pet_list`](#pet_list)
* [`pet_abilities`](#pet_abilities)
* [`pet_species`](#pet_species)
* [`pet_species_stats`](#pet_species_stats)
* [`battlegroups`](#battlegroups)
* [`races`](#races)
* [`classes`](#classes)
* [`char_achievements`](#char_achievements)
* [`guild_rewards`](#guild_rewards)
* [`guild_perks`](#guild_perks)
* [`guild_achievements`](#guild_achievements)
* [`item_classes`](#item_classes)
* [`talents`](#talents)
* [`pet_types`](#pet_types)


---------------------------------------

<a name="set_options" />
### set_options(options)

Sets global options for the armory

Options given locally will take priority over global options

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`region`,`realm`
  
__Example__

```js
var armory = require("wow-armory");
armory.set_options({
  "region" : "eu",
  "realm"  : "bladefist",
  "apikey" : "xxxxxxxxxxxxxxxxx"
});
```
---------------------------------------

<a name="character" />
### character(options,callback)

Gets character data from armory

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`region`,`realm`,`name`,`fields`
    * `apikey`,`region`,`realm` can be set in global options with [`set_options`](#set_options)
    * `fields` is either a string with format "field,field" or an array of fields.
      * `fields` can be zero or multiple of : `achievments,appearance,feed,guild,hunterPets,items,mounts,pets,petSlots,professions,progression,pvp,quests,reputation,statistics,stats,talents,titles,audit`

* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
armory.character({"name":"Eladurel","fields":["guild"]},function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------

<a name="guild" />
### guild(options,callback)

Gets guild data from armory

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`region`,`realm`,`name`,`fields`
    * `apikey`,`region`,`realm` can be set in global options with [`set_options`](#set_options)
    * `fields` is either a string with format "field,field" or an array of fields.
      * `fields` can be zero or multiple of : `members,achievements,news,challenge`

* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
armory.guild({"name":"The Art of Dying","fields":["news"]},function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------
<a name="achievement" />
### achievement(options,callback)
 
Provides data about an individual achievement.

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`id`
    * `apikey` can be set in global options with [`set_options`](#set_options)
    * `id` is the achievement id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
armory.achievement({"id":10457},function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------

<a name="item" />
### item(options,callback)

Provides detailed item information. This includes item set information if this item is part of a set.

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`id`
    * `apikey` can be set in global options with [`set_options`](#set_options)
    * `id` is the item id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
armory.item({"id":118937},function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------

<a name="item_set" />
### item_set(options,callback)

Provides detailed item information. This includes item set information if this item is part of a set.

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`id`
    * `apikey` can be set in global options with [`set_options`](#set_options)
    * `id` is the item set id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
armory.item_set({"id":699},function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------

<a name="auction" />
### auction([options],callback)

Provides a per-realm list of recently generated auction house data dumps.

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
armory.auction(function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------

<a name="boss_list" />
### boss_list([options],callback)

A list of all supported bosses. A 'boss' in this context should be considered a boss encounter, which may include more than one NPC.

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
armory.boss_list(function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------

<a name="boss" />
### boss(options,callback)

Provides information about bosses. A 'boss' in this context should be considered a boss encounter, which may include more than one NPC.

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`id`
    * `apikey` can be set in global options with [`set_options`](#set_options)
    * `id` is the boss id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
armory.boss({"id":91331},function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------

<a name="mounts" />

### mounts([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------

<a name="quest" />
### quest(options,callback)

Retrieve metadata for a given quest.

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`id`
    * `apikey` can be set in global options with [`set_options`](#set_options)
    * `id` is the quest id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
armory.quest({"id":44033},function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------

<a name="zone_list" />

### zone_list([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="zone" />

### zone(options,callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`id`
    * `apikey` can be set in global options with [`set_options`](#set_options)
    * `id` is the zone id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="spell" />

### spell(options,callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`id`
    * `apikey` can be set in global options with [`set_options`](#set_options)
    * `id` is the spell id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="realm_status" />

### realm_status([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`region`
    * `apikey`,`region` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys
  

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="recipe" />

### recipe(options,callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`id`
    * `apikey` can be set in global options with [`set_options`](#set_options)
    * `id` is the recipe id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="pvp_leaderboard" />

### pvp_leaderboard(options,callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`bracket`
    * `apikey` can be set in global options with [`set_options`](#set_options)
    * `bracket` is the bracket (2v2, 3v3, 5v5)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys


__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="chl_rlm_leaderboard" />

### chl_rlm_leaderboard([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`realm`
    * `apikey`,`realm` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys
  

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="chl_rgn_leaderboard" />

### chl_rgn_leaderboard([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`region`
    * `apikey`,`region` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys
  

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="pet_list" />

### pet_list([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="pet_abilities" />

### pet_abilities(options,callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`id`
    * `apikey` can be set in global options with [`set_options`](#set_options)
    * `id` is the ability id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="pet_species" />

### pet_species(options,callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`id`
    * `apikey` can be set in global options with [`set_options`](#set_options)
    * `id` is the species id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="pet_species_stats" />

### pet_species_stats(options,callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`id`
    * `apikey` can be set in global options with [`set_options`](#set_options)
    * `id` is the species id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="battlegroups" />

### battlegroups([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`region`
    * `apikey`,`region` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="races" />

### races([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="classes" />

### classes([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="char_achievements" />

### char_achievements([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="guild_rewards" />

### guild_rewards([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="guild_perks" />

### guild_perks([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="guild_achievements" />

### guild_achievements([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="item_classes" />

### item_classes([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="talents" />

### talents([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
<a name="pet_types" />

### pet_types([options],callback)

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`
    * `apikey` can be set in global options with [`set_options`](#set_options)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//set_options...
```

---------------------------------------
