const DB_HOST = String(process.env.DB_HOST ?? '') || ''
const DB_PORT = Number(process.env.DB_PORT) || 3306
const DB_USER = String(process.env.DB_USER ?? '') || ''
const DB_PASS = String(process.env.DB_PASS ?? '') || ''

export { DB_HOST, DB_PORT, DB_USER, DB_PASS }
