const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const connection=require('./connection');

const temple=require('./register');

const app=express()

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use("/",temple);
const port=process.env.Port||5000;
app.get('/',(req,res)=>{
    res.send("good");
})
app.listen(port,()=>{
    console.log("application is runnung on the http://localhost:5000");
});

