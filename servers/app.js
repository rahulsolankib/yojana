const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');
const multer = require('multer');
const storage = multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,'uploads/');
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
    console.log(req.file);
    res.json({"message":"Image Uploaded"});
})
app.post('/person',bodyParser.json(),(req,res)=>{
    username=req.body.username;
    password=req.body.password;
    
    con.then(()=>newclient.query("SELECT * FROM register WHERE username = $1 AND person_password = crypt($2, person_password);",[username,password]))
        .then((response)=>{
                res.json(response.rows)
            })
})

app.listen(4201,()=>{
    console.log("Started at port 4201.........");
})