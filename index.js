class EasyClock{
    constructor(){
        this.trackpoints = []
    }
    setTrackpoint(id){
        if(Date.now()>0){
        this.trackpoints[id] = Date.now();
        }
    }
    getTimeSinceTrackpoint(id){
        if((Date.now()-this.trackpoints[id])>0){
            return (Date.now()-this.trackpoints[id])
        }else{return 0}
    }
}

module.exports = EasyClock