const path = require("path");

// This is a small utility function that returns the path
// Irrespective of the file system we're on.
// The mainModule object has a data member: filename
// The function given below, returns the directory in which
// The mainModule.filname is present.
// This can also be termed as the root directory of the project.
module.exports = path.dirname(process.mainModule.filename);
