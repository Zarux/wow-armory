# Documentation

* [`setOptions`](#setOptions)
* [`character`](#character)
* [`guild`](#guild)
* [`achievement`](#achievement)
* [`item`](#item)


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
armory.guild({"name":"The Art of Dying","fields":["news"]},function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------
<a name="achievement" />
### achievement(options,callback)

Gets achievement data for the given item id

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
armory.achievement({"id":10457},function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------

<a name="item" />
### item(options,callback)

Gets item data for the given item id

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
armory.item({"id":118937},function(err,data){
  if(err) return console.log(err);
  console.log(data);
});
```

---------------------------------------
