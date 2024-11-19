import mysql2 from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
const connection = mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DBPORT,
    database: process.env.DB
})
connection.connect(error => error ? console.log("Database error ", error) : console.log('db connection success!'))
export default connection