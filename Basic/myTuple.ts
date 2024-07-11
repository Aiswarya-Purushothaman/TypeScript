const user:(string|number)[]=[1,'hc']


// when type should be in positions or order of types important  

// const user:[string,number,boolean]=['hc',131,true]

// ......................................................................................
type User=[number,string]

const newUser:User=[112,'example@gmail.com']


newUser[1]="anotherex@.com"

// newUser.push(true)  Not allowed



export {}