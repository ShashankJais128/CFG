const mongoose = require('mongoose')
const colors = require('colors')
const db =  require('../models')
const dotenv = require('dotenv')
dotenv.config()
const DB = process.env.MONGO_URI
const connectDB = async() => {
    try{
        const conn = await mongoose.connect(DB,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })

        console.log(`MongoDB : ${conn.connection.host}`.cyan.underline)
        initial()

    } catch(error) {
        console.log(`Error : ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}
const Role = db.role;
function initial() {
  Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
          new Role({
              name: "user"
          }).save(err => {
              if (err) {
                  console.log("error".pink, err);
              }
              console.log("added 'user' to roles collection".pink);
          });
          new Role({
              name: "moderator"
          }).save(err => {
              if (err) {
                  console.log("error".pink, err);
              }
              console.log("added 'moderator' to roles collection".pink);
          });
          new Role({
              name: "admin"
          }).save(err => {
              if (err) {
                  console.log("error", err);
              }
              console.log("added 'admin' to roles collection".pink);
          });
      }
  });
}
module.exports = connectDB