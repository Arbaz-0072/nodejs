const http= require('http')
const fs= require('fs')

const port= process.env.port || 3000
const server= http.createServer((req,res)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type','text/html')

    if(req.url=='/'){
        res.end('<h1>hello filannly you are here on the server</h1>')
    }
    else if(req.url=='/about'){
        res.end("<h1>Hi it is about section</h1>")
    }
    else if(req.url=='/openht'){
        let data=fs.readFileSync('index.html')
        res.end(data.toString())
    }
    else{
        res.end("<h1>Nothing to say</h1>")
    }
})

server.listen(port,()=>{
    console.log(`Server is finallly runnning on port ${port}`)
})

// to run this first run program from here for starting the server then go to browser and type localhost:3000 because we have set pot 3000 above
// by the way nodemon is better way just write nodemon./filename on cmd terminal