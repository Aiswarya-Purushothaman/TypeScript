// single inheritance
// class animal{
//   move(){
//     console.log("moving");
    
//   }
// }
// class Dog extends animal{
//   bark(){
//     console.log("its barking");
//   }
// }
// const myDog=new Dog()
// myDog.move()
// myDog.bark()
// ..............................................................
/// multilevel(a>B>c)   ////

// class Animal{
//   move(){
//     console.log("moving");
    
//   }
// }
// class dog extends Animal{
//   bark(){
//     console.log("keep barking");
    
//   }
// }
// class cat extends dog{
//   sound(){
// console.log("meow");

//   }
// }

// const creature=new cat()
// creature.bark()
// creature.move()
// creature.sound()
// ...............................................................
// hierarcheal(a>b,a>c,a>d)

// class Animal{
//   move(){
//     console.log("keep moving");
    
//   }
// }
// class birds extends Animal{
//   fly(){
//     console.log("keep flying");
    
//   }
// }
// class fish extends Animal{
//   swim(){
//    console.log("keep swiming");
    
//   }
// }
// const Fish=new fish()
// const Birds=new birds()

// Birds.fly()
// Birds.move()
// Fish.move()
// Fish.swim()

// ........................................................................
// hybrid

// interface canMove{
//   move():void
// }
// interface canBark{
//   bark():void
// }

// class Animal implements canMove{
//   move(){
//     console.log("keep moving");
    
//   }
// }
// class Dog extends Animal implements canBark{
//   bark(){
//     console.log("keep barking");
    
//   }
// }
// const dog=new Dog()
// dog.bark()
// dog.move()


// ......................................................

// multiple

// interface canMove {
// move():void
// }
// interface canBark {
// bark():void
// }
// class Animal implements canMove,canBark{
//   move(){
//     console.log("keeep moving");
//   }

//   bark(){
//     console.log("keep barking");
    
//   }
// }
// const dog=new Animal()
// dog.bark()
// dog.move()
