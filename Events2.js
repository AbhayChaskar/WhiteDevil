import events from 'events';//import module
const eventEmitter=new events.EventEmitter();
// define methods
// let method1=()=>console.log("Abhay Chaskar");
// let method2=()=>console.log("Akshay Chaskar");
// let method3=()=>console.log("Ramesh Chaskar")

// add events listeners

eventEmitter.on('myevent',(arg)=>{
    console.log(`myevent occurred : name : ${arg.name} and age : ${arg.age}`)

})
let obj={
    name:"Abhay",
    age:34
}
eventEmitter.emit('myevent',obj);

// eventEmitter.on('myevent',method2);
// eventEmitter.on('myevent',method3);
//fired the named event
// eventEmitter.emit('myevent'); //display all methods
// //remove the listeners
// eventEmitter.removeListener('myevent',method2);
// eventEmitter.emit('myevent'); //display 1st and 3rd method


