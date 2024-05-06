const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://aa4311:y9SCkkwLgTc99cE4@cluster0.4hnvspe.mongodb.net/MajorProject',
{useCreateIndex:true ,useNewUrlParser:true,useUnifiedTopology: true },()=>{
  console.log("connected to database.")
})


