const express = require('express');
const app = express();

app.get('/hello',(req,res)=>{
    res.status(200).json({success:true});
})

app.get('/',(req,res)=>{
    res.status(200).json({success:false});
})

app.listen(5000,()=>{
    console.log('server is running on port 5000');
})