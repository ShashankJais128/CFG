const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require('colors');
const connectDB = require('./config/db-config');

//Import functions and callbacks associated
//With admin, and user.
const userRoutes = require("./routes/user-routes");
const authRoutes = require("./routes/auth-routes");

//Import auth-routes and user-routes
const errorController = require('./controllers/error');

// //Why not use 'const' in place of var?
// var corsOptions = {
//     origin: "http://localhost:8081"
// };  

//Create the express app.
const app = express();

// Database configuration.
dotenv.config();
connectDB();

// parse requests of content-type - application/json
app.use(express.json());
app.use(cors())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// app.use(cors(corsOptions));


// Handling the "/" route.
const path = require("path");

// app.set("view engine", "ejs");
// app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

// Handling admin paths. Every route starting with,
// "/admin" is an admin route
app.use("/api/auth", authRoutes.routes);

// Handling user paths. Every route starting with,
// "/user" is a user route.
app.use("/user", userRoutes.routes);


// Handling a 404 page.
app.use("/", errorController.get404Page);

// In case the port is already listening to some app, you can use
// The following command to free the port
// Kill $(lsof -t -i :PORT_NUMBER)
// For this case, the command would be
// Kill $(lsof -t -i :3000)
// sudo systemctl start mongod
// sudo systemctl enable mongod
// mongo --eval 'db.runCommand({ connectionStatus: 1 })'
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log("server runnning....".yellow.bold))