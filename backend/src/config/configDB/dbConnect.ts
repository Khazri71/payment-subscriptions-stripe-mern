import mongoose from "mongoose"

const DBConnect = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI!)

    }catch(error){
        console.log(error)
    }
}
export default DBConnect