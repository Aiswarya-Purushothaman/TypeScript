class Person{

  private name:string

  constructor(name:string){
    this.name=name
  }

  public getName():string{
    return this.name
  }
  public setName(name:string):void{
this.name=name
  }
}
const person=new Person("aishu")
console.log( person.getName()); //aishu

console.log(person.setName('chris'));

