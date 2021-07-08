module.exports = {
  DB: "lq3orob7info6zel",
  USER: "vnl9x4bj13myhaaf",
  PASSWORD: "fqs7rsd5l04b5czi",
  HOST: "s465z7sj4pwhp7fn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  PORT: 3306,
  dialect: 'mysql',
  pool: {
	  max: 5, 
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};


/*
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
*/