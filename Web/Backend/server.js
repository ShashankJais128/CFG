const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Import functions and callbacks associated
// With admin, and user.
const userRoutes = require("./routes/user-routes");
const authRoutes = require("./routes/auth-routes");

// Import auth-routes and user-routes

const errorController = require('./controllers/error');

const dbConfig = require("./config/db-config");

// Import the index.js file in the models directory.
const db = require("./models");

// Why not use 'const' in place of var?
var corsOptions = {
    origin: "http://localhost:8081"
};  

// Create the express app.
const app = express();

// *******************************************************
const Role = db.role;

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connected to MongoDB.");
    initial();
})
.catch(err => {
    console.error("Connection error", err);
    process.exit();
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'user' to roles collection");
            });
            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'moderator' to roles collection");
            });
            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
            });
        }
    });
}
// *******************************************************

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

// Handling admin paths. Every route starting with,
// "/admin" is an admin route.
app.use("/", authRoutes.routes);

// Handling the "/" route.
const path = require("path");

// Import functions and callbacks associated
// With admin, and user.
const adminData = require("./routes/admin");
const userRoutes = require("./routes/user");
const errorController = require('./controllers/error');

const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

// Handling admin paths. Every route starting with,
// "/admin" is an admin route
app.use("/admin", adminData.routes);

// Handling user paths. Every route starting with,
// "/user" is a user route.
app.use("/", userRoutes.routes);

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
app.listen(3000);
