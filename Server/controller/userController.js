const registerUser= async (req,res)=>{
    try{
        const user = new userModel(req.body);
        const response = await user.save();

        res.status(200).json({sucess:true,response: response, message: "Registration sucessfull, please login"})

    }catch(err){
        res.send(500).json({sucess:false, message: err||"user entered invalid information"});
    }

}
module.exports={
    registerUser,
}