const express = require('express');
const app = express();

function middleware(req,res,next) {
    let{name} = req.query;
    if (!name || !name.length) {
        res.json({
            message:'err'
        })
    } else {
        next();
    }
}

app.all('*',middleware)

app.get('/test',(req,res)=>{
    res.json({
        message:'test'
    })
})
app.listen(3000,() =>{
    console.log('server started')
})