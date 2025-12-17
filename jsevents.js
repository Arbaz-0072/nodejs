const EventEmitter= require('events')
class MyEmitter extends EventEmitter {}

const myEmitter= new MyEmitter();

myEmitter.on('chargefull',()=>{
    console.log("pls off the button")

    setTimeout(() => {
        console.log("its gentle reminder")
    }, 3000);
})

myEmitter.emit('chargefull')