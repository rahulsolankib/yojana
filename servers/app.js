const express = require('express');
const app = express();
const cors = require('cors');
const pg = require('pg');
const Client = pg.Client;
app.use(cors());
const client=new Client({
    user: "postgres",
    password: "1234",
    host:"localhost",
    port:"5432",
    database: "account"
}) 
var newdata
client.connect()
.then(()=>console.log("Connected Successfully"))
.then(()=>client.query("select * from users"))
.then((result)=>{newdata=result.rows;
        console.log(newdata)
    })
.catch(e=>{
    console.log(e);
})
.finally(()=> client.end())
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/new',(req,res)=>{
    
    res.json(newdata);
})
app.get('/')
app.listen(4201,()=>{
    console.log("Started at port 4201.........");
})