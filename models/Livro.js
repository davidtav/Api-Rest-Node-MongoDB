import mongoose,{mongo} from "mongoose";

const livrosSchema = new mongoose.Schema({
  id:{type:mongoose.Schema.Types.ObjectId},
  titulo:{type:String,required:true},
  autor:{type:String,required:String},  
},{versionKey:false});

const livro = mongoose.model("livros",livrosSchema);

export default livro;