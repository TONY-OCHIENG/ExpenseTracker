import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const database = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
})

export default database.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Database connected successfully")
    }
})