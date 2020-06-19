
const express = require('express');
const router = express.Router();//can be seen as a submethod of app
//all api in app can be used in router

router.get('/demo',(req,res)=>{
    res.json({
        message:'good luck'
    })
})

module.exports = router;