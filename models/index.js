'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const Post = require('./post');
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
//config의 정보대로 시퀄라이즈와 mysql을 연결함

db.sequelize = sequelize;

db.Post = require('./post')(sequelize);
//모델 불러오기, 생성된 sequelize객체를 전달함, 모델에서는 해당 객체에 table 생성

module.exports = db;
