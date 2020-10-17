"use strict"
require("dotenv").config();

const passport = require("passport")
const express=require("express");
const router = require("./lib/routes/users");
const app = express();
const authRoutes=require("./lib/routes/users")
require('./config/googleAuth')
require("./config/facebookAuth")
require("./config/githubAuth")
require("./config/linkedinAuth")

passport.serializeUser(function(user, done) {
    done(null, user);
  });

passport.deserializeUser(function(obj,done){
    done(null,obj)
})


app.use(passport.initialize())


app.get("/",(req,res)=>{
    res.redirect("/login")
})

app.get("/login",(req,res)=>{
    res.send("Login Please")
})

app.get("/home",(req,res)=>{
    res.send("Welcome to our Our App!")
})

app.use("/auth",authRoutes)



const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`Server is working on port ${port}`))
