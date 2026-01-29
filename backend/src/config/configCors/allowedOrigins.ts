
import dotenv from "dotenv";
dotenv.config();
const allowedOrigins : string []= (process.env.ALLOWED_ORIGINS || "").split(",")
export default allowedOrigins