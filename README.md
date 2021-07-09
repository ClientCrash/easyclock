![npm](https://img.shields.io/npm/v/easyclock?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/easyclock?style=flat-square)
# easyclock
Simple npm package to track time.   
You can add trackpoints at any time.   
You can get the amount of time that passed since a trackpoint.



## example code

```javascript
const Clock = require('easyclock')
Clock1 = new Clock()
Clock1.setTrackpoint(1)
Clock1.addTrackpointXTimeAgo(2,1000)
setTimeout(function(){res()},3000)
function res(){
    console.log(Clock1.getTimeSinceTrackpoint(1))
    console.log(Clock1.getTimeSinceTrackpoint(2))
}
```
