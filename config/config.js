module.exports = {
  HOST: "s465z7sj4pwhp7fn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  USER: "yqk1p8u8s92oymbx",
  PASSWORD: "s3kv3nw5fsk5e84r",
  DB: "q7nunjp0nezlot6a",
  PORT: 3306,
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

/*   database: 'q7nunjp0nezlot6a',
  username: 'yqk1p8u8s92oymbx',
  password: 's3kv3nw5fsk5e84r',
  host: 's465z7sj4pwhp7fn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }*/