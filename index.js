

require('dotenv').config()
const express = require("express");
const PORT = process.env.PORT
const app = express()
const cors = require('cors') //Импорт cors
const fileUpload = require('express-fileupload')
const sequelize = require('./db')




const corsOptions ={
    origin: process.env.CLIENT,
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(express.json())
app.use(fileUpload({}));
// app.use('/api', router)


const start = async () => {
    try {

        await sequelize.authenticate()
        // await sequelize.sync({alter:true})
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start()