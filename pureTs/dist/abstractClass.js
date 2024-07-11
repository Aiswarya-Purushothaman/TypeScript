"use strict";
class TakePhotos {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // complex calculations
        return 8;
    }
}
class instagrams extends TakePhotos {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getsepia() {
        console.log("sepia");
    }
}
// const aishus=new Takephoto("yes","YES") //  wont work
// cant create obj directly from an abstract class but can do from an inherited class
const aishus = new instagrams("yes", "YES", 9);
