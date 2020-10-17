const { use } = require("passport");
const passport = require("passport")
const googleUser = require("../lib/model/google")
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:process.env.GOOGLE_CALLBACK_URL,
},async(accessToken , refreshToken , profile , done)=>{
    const userData={
        googleId:profile.id,
        name:profile.displayName,
        email:profile._json.email,
        profile_picture:profile._json.picture
    }
    let isUserExist =await googleUser.query().select("email").where("email",userData.email)
    // console.log(isUserExist)
    if(isUserExist!=undefined && isUserExist.length){
        const userUpdate=await googleUser.query().update(userData).where("email",userData.email);
        console.log("user already exists")
    }else{
        const createUser = await googleUser.query().insert(userData)
        console.log("Data inserted!")
    }
    done(null , profile)
}))

