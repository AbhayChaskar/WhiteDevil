import http from 'http';//import module
const server=http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write('<h2> Home Page ... NODE JS</h2>')
    }
    else if(req.url === "/login"){
        res.write('<h2> Login Here... </h2>')
    }
    else if(req.url === "/registration"){
        res.write('<h2> Register Here... </h2>')
    }
    res.end();
})
server.listen(4000);
console.log(`server working on 4000 port`);