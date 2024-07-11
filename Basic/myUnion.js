var num = 22;
num = 45;
num = 'wd';
var aishu = { name: "aishu", id: 334 };
aishu = { username: "aishhhh", id: 2 };
// ..........................................................
// function getdbId(id:number|string){
//   // API calls
// console.log(`DB id is ${id}`);
// }
getdbId(4);
getdbId("8546");
function getdbId(id) {
    // id.tolowerCase()
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array union
var data = [1, 2, 3];
var data1 = ["1", "2", "3"];
var data3 = ['1', 1, true];
//  it will alwayss the same
var pi = 3.14;
var seatAllot;
seatAllot = 'aisle';
// seatAllot='crew' throws error
