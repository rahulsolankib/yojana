const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');
const multer = require('multer');
var fs = require('fs');
const storage = multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,'../uploads/');
    },
    filename:function(req,file,cb)
    {
        cb(null,file.originalname);
    }
}
)
//const upload = multer({dest: 'uploads/'});
const upload = multer({storage:storage});
app.use(cors());
app.use(express.json());
const Client = pg.Client;
const newclient=new Client({
    user: "postgres",
    password: "1234",
    host:"localhost",
    port:"5432",
    database: "yojana"
}) 
const con=newclient.connect()
    .then(()=>{
        console.log("connected successfully")
    })    
app.get('/',(req,res)=>{
    res.send("Hello World jih");
})
app.post('/uploads',upload.single('product'),(req,res)=>{
    console.log(req.file.path);
    var c;
    const path=req.file.path
    function getByteArray(filePath){
        let fileData = fs.readFileSync(filePath).toString('hex');
        let result = []
        for (var i = 0; i < fileData.length; i+=2)
        result.push('0x'+fileData[i]+''+fileData[i+1])
        return result;
    }
    
    c = getByteArray(path)
    function stringFromArray(data)
    {
        var count = data.length;
        var str = "";
        
        for(var index = 0; index < count; index += 1)
        str += String.fromCharCode(data[index]);
        
        return str;
    }
    console.log(stringFromArray(c))   
    console.log(path)
    con.then(()=>newclient.query('insert into images values($1,$2)',['asd',c]))
    .then((response)=>{
        console.log(response)
               
        res.json(response.rows)
    })
})
app.get('/disaster/earthquake',(req,res)=>{
    con.then(()=>newclient.query('select * from earthquake'))
    .then((response)=>{
        console.log(response)
        res.json(response.rows)
    })
})
app.get('/events',(req,res)=>{
    con.then(()=>newclient.query('select * from events'))
    .then((response)=>{
        console.log(response)
        res.json(response.rows)
    })
})

app.post('/person',bodyParser.json(),(req,res)=>{
    username=req.body.username;
    password=req.body.password;
    
    con.then(()=>newclient.query("SELECT * FROM register WHERE username = $1 AND person_password = crypt($2, person_password);",[username,password]))
        .then((response)=>{
                res.json(response.rows)
            });
            
})

app.listen(4201,()=>{
    console.log("Started at port 4201.........");
})