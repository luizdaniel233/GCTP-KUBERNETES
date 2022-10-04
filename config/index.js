const http = require('http')
const { Server } = require("socket.io")
const express = require('express')
const body = require('body-parser')
const consign = require('consign')
const cors = require('cors')

module.exports = () => { 

    const app = express();

    app.use(cors())

    app.use(body.json())
    app.use(body.urlencoded({extended:true}))

    consign()
        .then('./src/models')
        .include('./src/controllers')
        .into(app);

    return app;

} 

