import mongoose,{mongo} from "mongoose";

async function conectarBanco(){
    mongoose.connect("mongodb://localhost:27017/biblioteca");
    return mongoose.connection;
}

export default conectarBanco;