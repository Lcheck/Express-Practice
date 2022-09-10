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

router.delete('/:postId',async(req,res)=>{
 //params로 데이터 전달하기
//  console.log(req.params)

    const post = await Post.destroy({where:{

        id:req.params.postId
    }
    })
//해당 id를 가진 행을 post테이블에서 제거
    
    res.status(200).send({id:req.params.postId})
 //json형태로 반환해야한다.
    })

module.exports = router;