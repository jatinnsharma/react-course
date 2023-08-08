const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const userController = require('./controller/user')


const app = express()
const PORT = 5000



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



app.post('/signup',userController.signup)


app.listen(PORT,()=>[
    console.log(`Backend Running at PORT:${PORT}`)
])