let express = require('express')
let router = express.Router()
let {Post} = require('../models')

router.use((req,res,next)=>{

    console.log('Time',Date.now())
    next()
})
//미들웨어 원리를 추후 분석해보자.



router.post('/',async(req,res)=>{ //게시글 등록
 
    const post = await Post.create({text:req.body.text})
 
    res.status(200).send(post)
 
    })

router.post('/:postId',async(req,res)=>{ //게시글 수정
    await Post.update({text:req.body.text},{where:{

        id:req.params.postId
    }
    })

    //update 메서드는 반환값이 존재하지 않기 때문에 전달 받은 id를 바탕으로 게시글을 찾은 뒤 프론트에 전달해줘야한다.
   const post= await Post.findOne({where:{id:req.params.postId}})

    res.status(200).send(post.dataValues)
 
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