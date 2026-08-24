const express=require('express');
const cors=require('cors');
const db=require('./config/db');
const loggerMiddleware=require('./middlewares/loggermiddleware');
const studentRouter = require("./routes/studentroute");
const errorhandler=require('./middlewares/errormiddleware');
const notfound=require('./middlewares/nofoundmiddleware');
require("dotenv").config();
const app=express();

app.use(cors());
app.use(express.json());

db();
app.use(loggerMiddleware);
app.use('/student',studentRouter);
app.use(notfound);
app.use(errorhandler);

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server run on port ${port}`);
});