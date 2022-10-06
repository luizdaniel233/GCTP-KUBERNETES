const db = require('../src/database/db');
const express = require('../config/index');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');
const controller = require('./controllers') // test

require("dotenv").config();


const app = express();
const port = process.env.PORT;

// Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use("/", controller);

// Database init
db.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log("Database connected!")
        app.listen(port,() => console.log(`Port ${port} available!`))
    }
})
