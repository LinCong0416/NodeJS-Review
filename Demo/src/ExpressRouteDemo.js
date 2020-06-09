const express = require('express');

const app = express();
const memberRouter = require('./Router');
app.use(memberRouter)

// app.get('/demo',(req,res)=>{
//     res.json({
//         message:'hello lin'
//     })
// })

// app('/user/byname',(req,res)=>{
//     let{name} = req.query;
//     res.json({
//         name:name
//     })
// })

// app.all('*',(req,res)=>{
//     res.json({
//         message:'good luck',
//         method:req.method,
//         uri:req.path
//     })
// })

// app.use('/demo',(req,res)=>{
//     res.json({
//         message:'good luck',
//         method:req.method,
//         uri:req.path
//     })
// })



app.listen(3000, () => {
    console.log('start success')
})