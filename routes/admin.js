const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_secret}= require("..")
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
  
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
          username : username,
          password : password
    })
    
    res.json({
        msg : "Admin got succesfully created "
    })
});

router.post('/signin', async(req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    

    const admin = await Admin.find({
        username,
        password
    })
    if(admin){
        const token = jwt.sign({
            username
        },JWT_secret);
        res.json({
            token
        })
    }else{
        res.status.json({
              msg:"wrong email and password"
        })
    }

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;