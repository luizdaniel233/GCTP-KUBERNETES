const db = require('../src/database/db');
const express = require('../config/index');
const app = express();
const port = 3001;

// db.connect(erro => {
//     if(erro){
//         console.log(erro)
//     }else{
//         console.log("Database connected!")
//         app.listen(port,() => console.log(`Port ${port} available!`))
//     }
// })

app.listen(port,() => console.log(`Port ${port} available!`))