//  require('dotenv').config({path : './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
});

/*
const app = express();

;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(e)=>{
            console.log("ERROR", e);
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening at port ${process.env.PORT}`);
        })
    }catch(e){
        console.error("ERROR : ", e);
        throw e;
    }
})() 
*/

connectDB();