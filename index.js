class EasyClock{
    constructor(){
        this.trackpoints = []
    }
    setTrackpoint(id){
        this.trackpoints[id] = Date.now();
    }
    getTimeSinceTrackpoint(id){
        return (Date.now()-this.trackpoints[id])
    }
}

module.exports = EasyClock