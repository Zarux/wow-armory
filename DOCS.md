# Documentation

* [`setOptions`](#setOptions)
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


---------------------------------------

<a name="setOptions" />
### setOptions(options)

Sets global options for the armory

Options given locally will take priority over global options

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`region`,`realm`
  
__Example__

```js
var armory = require("wow-armory");
armory.setOptions({
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
    * `apikey`,`region`,`realm` can be set in global options with [`setOptions`](#setOptions)
    * `fields` is either a string with format "field,field" or an array of fields.
      * `fields` can be zero or multiple of : `achievments,appearance,feed,guild,hunterPets,items,mounts,pets,petSlots,professions,progression,pvp,quests,reputation,statistics,stats,talents,titles,audit`

* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//setOptions...
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
    * `apikey`,`region`,`realm` can be set in global options with [`setOptions`](#setOptions)
    * `fields` is either a string with format "field,field" or an array of fields.
      * `fields` can be zero or multiple of : `members,achievements,news,challenge`

* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//setOptions...
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
    * `apikey` can be set in global options with [`setOptions`](#setOptions)
    * `id` is the achievement id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//setOptions...
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
    * `apikey` can be set in global options with [`setOptions`](#setOptions)
    * `id` is the item id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//setOptions...
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
    * `apikey` can be set in global options with [`setOptions`](#setOptions)
    * `id` is the item set id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//setOptions...
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
    * `apikey` can be set in global options with [`setOptions`](#setOptions)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//setOptions...
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
    * `apikey` can be set in global options with [`setOptions`](#setOptions)
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//setOptions...
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
    * `apikey` can be set in global options with [`setOptions`](#setOptions)
    * `id` is the boss id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//setOptions...
armory.boss({"id":91331},function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------

<a name="quest" />
### quest(options,callback)

Retrieve metadata for a given quest.

__Arguments__

* `options`: Options object
  * Valid options are : `apikey`,`id`
    * `apikey` can be set in global options with [`setOptions`](#setOptions)
    * `id` is the quest id
 
* `callback(err,data)`: A callback called when the data is ready 
  * `err`  is either null or string with error
  * `data` is the the data requested with given fields as keys

__Example__

```js
var armory = require("wow-armory");
//setOptions...
armory.quest({"id":44033},function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------
