import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

//db
import connectDB from './db/connect.js';

//routes
import authRouter from './routes/authRoute.js';
import jobsRouter from './routes/jobsRoutes.js';

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)



app.use(notFoundMiddleware) 
app.use(errorHandlerMiddleware)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
          console.log(`Server running on port ${port}`);
        } );
        
    } catch (error) {
        console.log(error);
    }
}

start();