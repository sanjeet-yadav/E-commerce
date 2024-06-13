import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from './routes/categoryRoute.js'
import productRoutes from './routes/productRoute.js'
import cors from 'cors'


// configur env
dotenv.config();

//database config
connectDB(); 

// rest object
const app = express()
 
// middelwares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)
   
//rest api
app.get('/', (req,res)=>{
    res.send("<h1>Welocme to ecommerce app<h1>");
}); 

// port
const PORT = process.env.PORT || 8080;

//run listin

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});