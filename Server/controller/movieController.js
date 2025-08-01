const movieModel = require("../model/movieModel");


const AddMovie = async (req, res)=>{

    try{
        const newMovie = new movieModel(req.body);
        await newMovie.save();
        res.send({
            success: true,
            message: "Movie Added Successfully",
        })
    }catch(err){
          res.send({
            success: false,
            message: err.message,
        })
    }
};

const  getAllMovies = async (req, res)=>{
     try{
        const movies = await movieModel.find();
   
        res.send({
            success: true,
            message: "Movie fetched Successfully",
            data: movies,
        })
    }catch(err){
          res.send({
            success: false,
            message: err.message,
        })
    }

}

const deleteMovies = async (req, res) => {
  try {
    await movieModel.findByIdAndDelete(req.body._id);
    res.send({
      success: true,
      message: "Movie Deleted SuccessFully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const updateMovies = async (req, res)=>{
     try{
        await movieModel.findByIdAndUpdate(
          req.body._id, req.body
        );
   
        res.send({
            success: true,
            message: "Movie updated Successfully",
          
        })
    }catch(err){
          res.send({
            success: false,
            message: err.message,
        })
    }
}



module.exports ={
 AddMovie,
 getAllMovies,
 deleteMovies,
 updateMovies,
};