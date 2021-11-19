import fs from 'fs';
import http from 'http';

http.createServer((req, res)=> {
    let body='';
    if(req.method === 'GET' && req.url === "/")
    {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.readFile('./Form.html','UTF-8',(err, data)=> {
            if(err) throw err;
            res.write(data);
            return res.end();
        });
    }
    else if(req.method === 'POST')
    {   
        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(body, () => {
            return res.end();
            });
        });
    }
    else
    {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end(`<h1> 404 ERROR Page Not Found </h1>`);
    }
}).listen(8888);
console.log('Server is Running');
