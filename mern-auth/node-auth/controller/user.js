const UserModel = require('../models/user')

module.exports.signup = (req,res)=>{
    console.log(req.body)
    const newUser = new UserModel({email:req.body.email,password:req.body.password
    });

    newUser.save().then(()=>{
        res.send({code:200,message:'signUp sccess'})
    }).catch((err)=>{
        res.send({code:500,message:'Signup Err'})
    })
    res.send('success')
}