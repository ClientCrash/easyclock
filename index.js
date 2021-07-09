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
    addTrackpointXTimeAgo(id,timeago){
        if(Date.now()>0){
            this.trackpoints[id] = Date.now()-timeago;
            }
    }
    addTrackpointAtTime(id,time){
        if(Date.now()>0){
            this.trackpoints[id] = time;
            }
    }
}

module.exports = EasyClock