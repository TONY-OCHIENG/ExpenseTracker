//Registration controller function

import database from "../configs/database.js"
import { comparepassword, hashPassword } from "../configs/hashPassword.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const register = (request,response) => {
    const {firstName, lastName, email, password} = request.body
    if (!firstName || !lastName || !email || !password) {
        return response.status(200).json({status: false, message: "Please fill all fields"})
    }

    // email validation using Regex

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    if (!regex.test(email)) {
        return response.status(200).json({status: false, message: "Enter a valid email address"})
    }
    
    // password length validation

    if (password.length < 6) {
        return response.status(200).json({status: false, message: "Password must be 8 characters long"})
    } 

    const hashpassword = hashPassword(password)
    
    try {
        const sqlQuerry = "INSERT INTO user(firstName,lastName,password,email) VALUES(?,?,?,?)"
        database.query(sqlQuerry,[firstName,lastName,email,hashpassword],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(201).json({status: true, message:"Account registered successfully"})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const login = (request, response) => {
    const { email, password} = request.body
    if (!email || !password ) {
        return response.status(200).json({status: false, message: "Please fill all fields"})
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    if (!regex.test(email)) {
        return response.status(200).json({status: false, message: "Enter a valid email address"})
    }

    try {
        const sqlQuerry = "SELECT * FROM user WHERE email = ?"
        database.query(sqlQuerry,[email], (error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.length > 0) {
                const hpassword = comparepassword(password,result[0].password)
                if (hpassword) {
                    const lastName = result[0].lastName
                    const firstName = result[0].firstName
                    const userID = result[0].user_id
                    const token = jwt.sign({lastName,firstName,userID},process.env.SECRET,{expiresIn:'2d'})
                    response.cookie('token',token)
                    return response.status(200).json({status: true, message: "login successfully"})
                } else {
                    return response.status(200).json({status: false, message: "wrong credentials"})
                } 
            } else {
                return response.status(200).json({status: false, message: "user not found"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message:"Internal server error"})
    }
    
}