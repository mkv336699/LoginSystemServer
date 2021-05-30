const config = {
	host: process.env.HOST,
	port: process.env.PORT,
	db: {
		host: process.env.DBHOST,
		port: process.env.DBPORT,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
	},
	mongodb: {
		uri: process.env.DB_URI,
		debug: false
	},
}

/** Set the environment to default/development */
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
config.env = process.env.NODE_ENV;
console.log(`Loading ${process.env.NODE_ENV} environment...`);

module.exports = config;
