require("dotenv").config()
const express = require("express")
const app = express();
const path = require('path' )
const port = process.env.port || 3000
const { logger } = require('./middleware/logEvents')
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConfig");
const mongoose = require("mongoose");


//Connect to database
connectDB();

//C-O-R-S
app.use(cors());


// custom middleware functions
app.use(logger)


// built in middleware functions
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use("/subdir",express.static(path.join(__dirname, "/public")));


//Routes
app.use("/", require("./routes/root"))
app.use("/subdir", require("./routes/subdir"))

//API Route
app.use("/employees", require("./routes/api/employees"))
app.use("/fillDB", require("./routes/api/statesAPI"))
app.use("/states", require("./routes/api/statesAPI"))

//Login and register Route
app.use("/register", require("./routes/api/register"))
app.use("/logIn", require("./routes/api/logIn"))


// 404 route
app.get("/*", (req, res)=>{
  res.sendFile(path.join(__dirname, "views", "404.html"))
})

mongoose.connection.once("open", ()=>{
  console.log("Connected to MongoDB")
  //listen to port
  app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
})