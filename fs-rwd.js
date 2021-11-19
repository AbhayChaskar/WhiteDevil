import fs from 'fs';//import module
//asynchronus read file

// fs.readFile('super.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })

//synchronus read file

// let data=fs.readFileSync('super.txt').toString();
// console.log(data)

//asynchronus write file

// fs.writeFile('super.txt','Hello, are you in trouble?',(err)=>{
//          if(err) throw err;
//          console.log("File Write Successfully");
//     })

//asynchronus delete file

    fs.unlink('super.txt',(err)=>{
            console.log(err)
            console.log("File Deleted Successfully");
        })

