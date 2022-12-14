
module.exports = (sequelize)=>{

  const {DataTypes} = require('sequelize');

  const Post = sequelize.define('Post', {
    //테이블의 속성을 지정하는 항
    text: {
      type: DataTypes.STRING(100),
      defaultValue: "비어있음!",
    }
  
  }, {
    freezeTableName: true,
    //시퀄라이즈의 테이블명 자동 복수화를 막아줌
    charset:'utf8mb4',
    collate:'utf8mb4_general_ci'
    // 모델의 추가 옵션들을 정할 수 있는 항
  });

  return Post;
  //리턴해줘야함
};