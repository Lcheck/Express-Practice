const express=require('express');
const {sequelize} = require('./models');
const app = express();
const cors = require('cors');
const postRouter = require('./routes/post')
const postsRouter = require('./routes/posts')

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
   origin:'*',
   credentials:true,
   }));
//프론트-백엔드 간 port가 달라 발생하는 cors 문제 해결

app.get('/',(req,res)=>{
res.send('Hello!');
})

app.use('/posts', postsRouter);
app.use('/post', postRouter);
//라우터 자원별로 분리
//1항의 자원은 각 라우트에 기본적으로 들어가므로 안넣어줘도 된다.

app.listen(3065,()=>{
   

console.log('서버실행중')});

