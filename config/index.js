module.exports = {
  "development": {
    "username": "user",
    "password": "user",
    "database": "mos_node_practice",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": 8889
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DB,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  }
};
