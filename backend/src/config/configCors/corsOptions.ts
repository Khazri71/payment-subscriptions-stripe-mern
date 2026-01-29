import allowedOrigins from "./allowedOrigins.js"

const corsOptions = {
    origin : allowedOrigins ,
    methods : ["GET" , "POST" , "PUT" , "DELETE"] ,
    credentials : true,
    optionsSuccessStatus : 200 
}
export default corsOptions