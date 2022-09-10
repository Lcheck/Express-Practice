let express = require('express')
let router = express.Router()
let {Post} = require('../models')
//db객체안에 모델들이 들어있으므로 구조분해

router.use((req,res,next)=>{

    console.log('Time',Date.now())
    next()
})
//미들웨어 원리를 추후 분석해보자.



router.get('/',async(req,res)=>{

    const posts = await Post.findAll({
                   attributes:['text']})
 
    res.status(200).send(posts);
    //post테이블중에서 text속성을 모두 가져와 객체 배열로 프론트에 반환
 
    });

module.exports = router;