const express = require('express');
//app is an express instance
const app = express();
// app.use((req,res) =>{
//     res.json({
//         name:"Lin Cong"
//     })
// })

app.get('/name/:age',(req,res) =>{
    let {age} = req.params;
    res.json({
        name:'Lin',
        age
    })
})

app.post('/age',(req,res) =>{
    res.send('18')
})

app.listen(3000,() =>{
    console.log('server started')
})