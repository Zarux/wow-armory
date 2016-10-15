# wow armory api

A simple interface for the wow armory

## Install
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

armory.character({"name":"Eladurel","fields":["guild"]},function(err,char_data){
  armory.guild({"name":char_data.guild.name,"fields":["news"]},function(err,guild_data){
    console.log(guild_data);
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
* [`zone_list`](DOCS.md#zone_list)
* [`zone`](DOCS.md#zone)
* [`spell`](DOCS.md#spell)
* [`realm_status`](DOCS.md#realm_status)
* [`recipe`](DOCS.md#recipe)
* [`pvp_leaderboard`](DOCS.md#pvp_leaderboard)
* [`chl_rlm_leaderboard`](DOCS.md#chl_rlm_leaderboard)
* [`chl_rgn_leaderboard`](DOCS.md#chl_rgn_leaderboard)
* [`pet_list`](DOCS.md#pet_list)
* [`pet_abilities`](DOCS.md#pet_abilities)
* [`pet_species`](DOCS.md#pet_species)
* [`pet_species_stats`](DOCS.md#pet_species_stats)
* [`battlegroups`](DOCS.md#battlegroups)
* [`races`](DOCS.md#races)
* [`classes`](DOCS.md#classes)
* [`char_achievements`](DOCS.md#char_achievements)
* [`guild_rewards`](DOCS.md#guild_rewards)
* [`guild_perks`](DOCS.md#guild_perks)
* [`guild_achievements`](DOCS.md#guild_achievements)
* [`item_classes`](DOCS.md#item_classes)
* [`talents`](DOCS.md#talents)
* [`pet_types`](DOCS.md#pet_types)
