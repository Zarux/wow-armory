# wow armory api

A simple interface for the wow armory

## Install (not added to npm yet)
```bash
npm install wow-armory
```

## Example Usage
```js
var armory = require("wow-armory");
armory.set_options({
  "region":"eu",
  "realm":"bladefist",
  "apikey":"xxxxxxxx"
});

armory.character({"name":"Eladurel","fields":["guild"]},function(data){
  armory.guild({"name":data.guild.name,"fields":["news"]},function(data){
    console.log(data);
  });
});

```

## Documentation

* [`set_options`](DOCS.md#set_options)
* [`character`](DOCS.md#character)
* [`guild`](DOCS.md#guild)
* [`achievement`](DOCS.md#achievement)
* [`item`](DOCS.md#item)
* [`item_set`](DOCS.md#item_set)
* [`auction`](DOCS.md#auction)
* [`boss_list`](DOCS.md#boss_list)
* [`boss`](DOCS.md#boss)
* [`mounts`](DOCS.md#mounts)
* [`quest`](DOCS.md#quest)
