module.exports = {
  development: {
    database: 'clients-development',
    username: 'root',
    password: null,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    database: 'clients-production',
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    host: '127.0.0.1',
    dialect: 'mysql',
  }
}
