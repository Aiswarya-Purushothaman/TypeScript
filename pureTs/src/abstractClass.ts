abstract class TakePhotos{
  constructor(
    public cameraMode:string,
    public filter:string
  ){}

 abstract getsepia():void
  getReelTime():number{
    // complex calculations
    return 8
  }
}



class instagrams extends TakePhotos{
  constructor(
    public cameraMode:string,
    public filter:string,
    public burst:number
  ){
    super(cameraMode,filter)

  }
  getsepia(): void {
      console.log("sepia");
      
  }

}


// const aishus=new Takephoto("yes","YES") //  wont work
// cant create obj directly from an abstract class but can do from an inherited class

const aishus=new instagrams("yes","YES",9)