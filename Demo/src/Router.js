const express = require('express');
const router = express.Router();//可以看做是app中的子方法

router.get('/demo',(req,res)=>{
    res.json({
        message:'good luck'
    })
})

module.exports = router;