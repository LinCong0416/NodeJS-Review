const express = require('express');
const app = express();

// all err http status == 500
/** get task list **/
app.get('/list/:status/:page',async (req,res,next) => {
    res.json({
        list:[]
    })
})

/** build a todo **/
app.post('/create',async (req,res,next)=>{
    let {name,deadline,content} = req.body;
    res.json({
        todo:{},
        name,
        deadline,
        content
    })
})

/** update or delete a todo **/
app.post('/update',async (req,res,next)=> {
    let {name, deadline, content,id} = req.body;
    res.json({
        todo: {},
        name,
        deadline,
        content,
        id
    })
})

app.use((err,req,res,next) => {
    if(err) {
        res.status(500).json({
            message:err.message
        })
    }
})

app.listen(3000, () => {
    console.log('server start sucess')
})