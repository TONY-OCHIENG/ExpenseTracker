

//Registration controller function

import { hashPassword } from "../configs/hashPassword.js"

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
    
  
}