import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectClaudinary from './config/claudinary.js';
import userRouter from './routes/userRoute.js'


// App Configuration
const app = express();
const port = process.env.PORT || 3000;
connectDB();
connectClaudinary();

// App MiddleWare
app.use(express.json());
app.use(cors());

// API EndPoints
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send("Api is Correct");
})

// Start The Server
app.listen(port, () => console.log(`Server started at port ${port}`));