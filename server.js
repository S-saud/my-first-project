const express=require('express');
const cors=require('cors');
const db=require('./config/db');
const uuser=require('./models/User');
const loggerMiddleware=require('./middlewares/loggermiddleware');
const studentRouter = require("./routes/studentRoutes");
const errorhandler=require('./middlewares/errormiddleware');
const notfound=require('./middlewares/nofoundmiddleware');
require("dotenv").config();
const app=express();

app.use(cors());

db();
app.use(loggerMiddleware);
app.use('/student',studentRouter);
app.use(notfound);
app.use(errorhandler);

app.use(express.json());


const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server run on port ${port}`);
});