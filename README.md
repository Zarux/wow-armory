# wow armory api

A simple interface for the wow armory

## Install
```bash
npm install wow-armory
```

## Example Usage
```js
var armory = require("wow-armory");
armory.setOptions({
  "region":"eu",
  "realm":"bladefist",
  "apikey":"xxxxxxxx"
});

armory.character({"name":"Eladurel","fields":["guild"]},function(data){
  armory.guild({"name":data.guild.name,"fields":["news"]},function(data)){
    console.log(data.news);
  }
});

```

## Documentation
