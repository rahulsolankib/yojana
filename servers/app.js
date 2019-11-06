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
    
})
app.post('/image/metadata',(req,res)=>{
    meta=req.body;
    console.log(meta.uuid);
    let date_ob = new Date();
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();
    con.then(()=>newclient.query("insert into imageMeta values($1,$2,$3,$4,$5)",[meta.uuid,meta.meta.name,meta.meta.contentType,meta.meta.fullPath,meta.meta.updated]))
        .then((response)=>{
                res.json({msg:"Successfully entered"});
            });
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
app.post('/person/photos/delete',(req,res)=>{
    meta=req.body;

    con.then(()=>newclient.query("delete from imageMeta where iname = $1",[meta.iname]))
        .then((response)=>{
                res.json({msg:"Successfully delete"});
         });
})
app.post('/person/form',(req,res)=>{
    body=req.body;
    console.log(body)
    con.then(()=>newclient.query("insert into policy_details values($1,$2,$3,$4,$5)",[body.pid,body.mob,body.add,body.aadhar,body.policy]))
        .then((response)=>{
                res.json({msg:"Successfully added"});
         });
})
app.post('/person',bodyParser.json(),(req,res)=>{   
    username=req.body.username;
    password=req.body.password;
    
    con.then(()=>newclient.query("SELECT * FROM register WHERE username = $1 AND person_password = crypt($2, person_password);",[username,password]))
        .then((response)=>{
                res.json(response.rows)
            });
            
})
app.post('/person/register',(req,res)=>{
    username=req.body.username;
    password=req.body.password;
    
    con.then(()=>newclient.query("SELECT * FROM register WHERE username = $1 AND person_password = crypt($2, person_password);",[username,password]))
        .then((response)=>{
                res.json(response.rows)
            });
            
})
app.post('/register',(req,res)=>{
    username=req.body.username;
    password=req.body.person_password;
    name=req.body.person_name;
    phno=req.body.phno;
    email=req.body.email;
    console.log(req.body);
    con.then(()=>newclient.query("insert into  register (person_name,username,person_password,email,phno) values($1,$2,crypt($3, gen_salt('bf')),$4,$5)",[name,username,password,email,phno]))
        .then((response)=>{
                res.json(response.rows)
            });         
})
app.post('/person/photos',(req,res)=>{
    con.then(()=>newclient.query("SELECT * FROM imageMeta WHERE pid = $1;",[req.body.uuid]))
        .then((response)=>{
                res.json(response.rows)
            });
})

app.post('/person/message',(req,res)=>{
    
    console.log(req.body)
    con.then(()=>newclient.query("select * from register where person_name=$1",[req.body.name]))
        .then((response)=>{
            newclient.query("insert into messages values($1,$2,$3)",[(response.rows[0]).pid,req.body.mes,req.body.mdate])
        }).then(()=>{
            res.json({msg: "successfully done"});
        })
})
app.post('/chats',(req,res)=>{
    con.then(()=>newclient.query("select * from messages where pid=$1",[req.body.pid]))
        .then((response)=>{
            console.log(req.body)
            res.json(response.rows)
        })
})
app.listen(4201,()=>{
    console.log("Started at port 4201.........");
})
