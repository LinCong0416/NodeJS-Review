const express = require('express');
const app = express();
const models = require('../db/models')

// all err http status == 500
/** get task list **/
app.get('/list/:status/:page',async (req,res,next) => {
    let {status,page} = req.params;
    let limit = 10;
    let offset = (page - 1) * limit;
    let list = await models.Todo.findAndCountAll({
        where:{
            status
        },
        offset,
        limit
    })
    res.json({
        list
    })
})

/** build a todo **/
app.post('/create',async (req,res,next)=>{
    try{
        let {name,deadline,content} = req.body;
        let todo = await models.Todo.create({
            name,
            deadline,
            content
        })
        res.json({
            todo
        })
    }catch (error) {
        next(error)
    }
})

/** update or delete a todo **/
app.post('/update',async (req,res,next)=> {
    try{
        let {name, deadline, content,id} = req.body;
        let todo = await models.Todo.findOne({
            where:{
                id
            }
        })
        if (todo && status != todo.status) {
            todo = await todo.update(
                name,
                deadline,
                content
            )
        }
        res.json({
            todo
        })
    }catch (error) {
        next(error)
    }
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