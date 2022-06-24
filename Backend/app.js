const express = require("express");
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
app.listen(3000);
