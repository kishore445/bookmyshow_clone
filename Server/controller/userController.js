const userModel = require("../model/userModel");

const registerUser= async  (req,res)=>{
    try{
      
        const user = new userModel(req.body);
        const response = await user.save();

        res.status(200).json({
            success: true,
            response: response,
            message: "Registration Successfull, please login",
          });
        } catch (error) {
          res.status(400).json({
            success: false,
            message: error || "user has entered invalid information",
          });
        }

}
module.exports={
    registerUser,
}