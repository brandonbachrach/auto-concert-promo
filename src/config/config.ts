export const ENVIRONMENT = process.env.NODE_ENV || 'DEV'
export const IS_PRODUCTION = ENVIRONMENT === 'PROD'
export const IS_TEST = ENVIRONMENT === 'DEV'
export const APP_PORT = Number(process.env.APP_PORT) || 9000
export const APP_PREFIX_PATH = process.env.APP_PREFIX_PATH || '/'
export const DB = {
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_USER_PWD,
  HOST: process.env.DB_HOST,
  NAME: process.env.DB_NAME,
  PORT: Number(process.env.DB_PORT) || 27017,
}
export const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/Mocks'
