module.exports = app => {

    app.get("/home",(req,res) => {
        res.status(200).send({message : "oi"})
    })

}