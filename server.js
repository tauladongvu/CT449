const { default: mongoose } = require("mongoose");
const app = require("./app");
const config = require("./app/config");

//connect to database
mongoose.connect(config.db.uri)
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((error) => {
        console.log("Cannot connect to the database!", error);
        process.exit();
    });
    
//start server
const PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});