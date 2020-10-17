const passport = require('passport');
const facebookUsers = require("../lib/model/facebook")
const FacebookStrategy = require('passport-facebook').Strategy;
const {FACEBOOK_APP_ID,FACEBOOK_APP_SECRET , FACEBOOK_CALLBACK_URL} = process.env

passport.use(new FacebookStrategy({
    clientID:FACEBOOK_APP_ID,
    clientSecret:FACEBOOK_APP_SECRET,
    callbackURL: FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'photos', 'email']
  }
  ,async(accessToken , refreshToken , profile , done)=>{
    const Profile={
        facebookId:profile.id,
        name:profile.displayName,
        email:profile._json.email,
        profile_picture:profile.photos[0].value
    }
   
    let isUserExist =await facebookUsers.query().select("facebookId").where("facebookId",Profile.facebookId)
    // console.log(isUserExist)
    if(isUserExist!=undefined && isUserExist.length){
        const userUpdate=await facebookUsers.query().update(Profile).where("facebookId",Profile.facebookId);
        console.log("User already exists")
    }else{
        const createUser = await facebookUsers.query().insert(Profile)
        console.log("Data inserted!")
    }
    done(null , Profile)
}));

