import config from './config'

export default {
  development: {
    client: config.get('db.connection'),
    connection: {
      host: config.get('db.host'),
      port: config.get('db.port'),
      user: config.get('db.user'),
      password: config.get('db.password'),
      database: config.get('db.database')
    },
    pool: {
      min: Number(config.get('db.pool.min', 10)),
      max: Number(config.get('db.pool.max', 100))
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  production: {
    client: config.get('db.connection'),
    connection: {
      host: config.get('db.host'),
      port: config.get('db.port'),
      user: config.get('db.user'),
      password: config.get('db.password'),
      database: config.get('db.database')
    },
    pool: {
      min: Number(config.get('db.pool.min', 10)),
      max: Number(config.get('db.pool.max', 100))
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  test: {
    client: 'sqlite',
    connection: {
      filename: './local.sqlite'
    },
    useNullAsDefault: true
  }
}
