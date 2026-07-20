
export const income = (request,response) => {
    const { userId, incomeDate, incomeDetails,incomePrice} = request.body
    if (!userId || !incomeDate || !incomeDetails || !incomePrice) {
        return response.status(200).json({status: false, message: "Please fill all fields"})
    }


}