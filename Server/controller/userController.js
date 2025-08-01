const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const registerUser= async  (req,res)=>{
    try{
      const userExists = await userModel.findOne({email: req.body?.email});
      if(userExists){
        return res.status(200).json({
          success:false,
          message: "User Already Exists",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body?.password, salt);
      req.body.password= hashedPassword;
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
const loginUser = async (req,res)=>{
  try{
    const userExists = await userModel.findOne({email: req.body?.email})
    if(!userExists){
      return res.status(200).send({
        success: false,
        message: "user Email doesnt exist",

      });
    }

    const validatepassword = await bcrypt.compare(req.body?.password, userExists.password);
    if(!validatepassword){
      return res.status(400).send({
        success: false,
        message: "Incorrect Password",
      });

    }
     const token = jwt.sign({userID: userExists._id},process.env.Secretkey,{expiresIn:"1d"})
    return res.status(200).send({
      success: true,
      message: "User logged In",
      data: token,

    })
  }catch(err){
    res.status(400).json({
      success: false,
      message: err|| "user has entered invalid information",
    })

  }
}
const getCurrentuserInfo = async (req, res) =>{
try{
 const user = await userModel.findById(req.body.userID).select("-password");
    res.send({
      success: true,
      message: "User Details Fetched Successfully",
      data: user,
   
})
}catch(error){
  res.send({
      success: false,
      message: error.message,
    });
}
}

module.exports={
    registerUser,
    loginUser,
    getCurrentuserInfo,
}