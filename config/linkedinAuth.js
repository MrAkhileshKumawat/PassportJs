const passport = require("passport")
const linkedinUsers = require("../lib/model/linkedin")
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const {LINKEDIN_CLIENT_ID,LINKEDIN_CLIENT_SECRET , LINKEDIN_CALLBACK_URL} = process.env

passport.use(new LinkedInStrategy({
    clientID: LINKEDIN_CLIENT_ID,
    clientSecret: LINKEDIN_CLIENT_SECRET,
    callbackURL: LINKEDIN_CALLBACK_URL,
    scope: ['r_emailaddress', 'r_liteprofile'],
  },async(accessToken , refreshToken , profile , done)=>{
        const Profile={
            linkedinId:profile.id,
            name:profile.displayName,
            email:profile.emails[0].value,
            profile_picture:profile.photos[3].value
        }
    
        let isUserExist =await linkedinUsers.query().select("linkedinId").where("linkedinId",Profile.linkedinId)
        // console.log(isUserExist)
        if(isUserExist!=undefined && isUserExist.length){
            const userUpdate=await linkedinUsers.query().update(Profile).where("linkedinId",Profile.linkedinId);
            console.log("User already exists")
        }else{
            const createUser = await linkedinUsers.query().insert(Profile)
            console.log("Data inserted!")
        }
        done(null , Profile)
    }
));
  