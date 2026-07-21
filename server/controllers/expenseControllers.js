
export const expense = (request,response) => {
    const {userId, expenseDetails, expenseDate, expensePrice} = request.body
    if (!userId || !expenseDetails || !expenseDate || !expensePrice) {
        return response.status(400).json({status: false, message: "Please fill all fields"})
    }
    console.log(userId,expenseDetails,expenseDate,expensePrice)    
}