import fs from 'fs';
import http from 'http';

http.createServer((req, res)=> {

    //Open a file on the server and return/read its content
    if(req.url === "/readfile"){
        fs.readFile('super.txt',(err, data)=> {
            if(err) throw err;
            res.write(data);
            return res.end();
        })
    }
    else if(req.url === "/writefile"){
        fs.writeFile('super.txt','Hello, are you in trouble?',(err)=>{
            if(err){
                res.write(err)
            } 
            else{
                res.write("File written Successfully")
            }
            // res.write(data);
            return res.end();
            // console.log("File Write Successfully");
        })
    }
    else if(req.url === "/deletefile"){
        fs.unlink('filename.txt',(err)=>{
            // if(err) throw err;
            console.log(err)
        })
        res.write("File Unlinked Successfully")
    }  

    else if(req.url === "/appendfile"){
        fs.appendFile('super.txt', ' I am From Pune!', (err) =>{
            if (err) throw err;
            res.write("File Updated Successfully")
            return res.end();
        });
    }  

    else if(req.url === "/renamefile"){
        fs.rename('upper.txt', 'super.txt', (err)=> {
            if (err) throw err;
            res.write("File Renamed Successfully")
            return res.end();
        })
    }  
    
}).listen(4000);
console.log("server working on 4000 port")