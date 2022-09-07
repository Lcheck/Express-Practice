const express=require('express');
const {sequelize} = require('./models');

const app = express();

app.get('/',(req,res)=>{


res.send('hello express');
});

//맨처음에 DB스키마가 만들어져 있어야 오류가 안남, npx sequelize db:create 해주자 config의 설정대로 db가 생성됨


sequelize.sync({ force: false })
   .then(() => {
      console.log('데이터베이스 연결됨.');
   }).catch((err) => {
      console.error(err);
   });
//mysql와 sequelize 동기화


app.listen(3065,()=>{console.log('서버실행중')});

