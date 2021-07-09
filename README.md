# easyclock
Simple npm package to track time.   
You can add trackpoints at any time.   
You can get the amount of time that passed since a trackpoint.



## example code

```javascript
const Clock = require('easyclock')
Clock1 = new Clock()
Clock1.setTrackpoint(1) //1 is the id

setTimeout(function(){res()},3000)

function res(){
    console.log(Clock1.getTimeSinceTrackpoint(1))
}
```
