const db = require('../src/database/db');
const express = require('../config/index');
require("dotenv").config();
const app = express();
const port = process.env.PORT;

db.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log("Database connected!")
        app.listen(port,() => console.log(`Port ${port} available!`))
    }
})
