require('dotenv');
const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  [ENV]: {
    username:'user',
    password: 'password',
    database: 'db',
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
    },
    query: {
      raw: true
    },
    logging: null
  }
};
