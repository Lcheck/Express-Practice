const express=require('express');
const {sequelize,Post} = require('./models');
const app = express();
const cors = require('cors');


//맨처음에 DB스키마가 만들어져 있어야 오류가 안남, npx sequelize db:create 해주자 config의 설정대로 db가 생성됨


sequelize.sync({ force: false })
   .then(() => {
      console.log('데이터베이스 연결됨.');
   }).catch((err) => {
      console.error(err);
   });
//mysql와 sequelize 동기화

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//req.body를 사용하기 위해 달아주는 미들웨어

app.use(cors({
   origin:'http://localhost:3000',
   credentials:true,
   }));
//프론트-백엔드 간 port가 달라 발생하는 cors 문제 해결

app.get('/',(req,res)=>{

res.send('Hello!');
})

app.get('/posts',async(req,res)=>{

   const posts = await Post.findAll({
                  attributes:['text']})

   res.status(200).send(posts);
   //post테이블중에서 text속성을 모두 가져와 객체 배열로 프론트에 반환

   });
app.post('/post',async(req,res)=>{
 
   const post = await Post.create({text:req.body.text});
   
   res.status(200).send(post);

   });
app.listen(3065,()=>{
   

console.log('서버실행중')});

