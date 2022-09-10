let express = require('express')
let router = express.Router()
let {Post} = require('../models')

router.use((req,res,next)=>{

    console.log('Time',Date.now())
    next()
})
//미들웨어 원리를 추후 분석해보자.



router.post('/',async(req,res)=>{
 
    const post = await Post.create({text:req.body.text})
    
    res.status(200).send(post)
 
    })

module.exports = router;