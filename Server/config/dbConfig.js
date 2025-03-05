const mongoose = require('mongoose');

mongoose.connect(process.env.MongoDBURL).then(()=>{
    console.log("connection is sucessfull");
}).catch((err)=>{
    console.log("failed to connect with DB", err);
});