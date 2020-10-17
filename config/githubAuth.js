const passport = require('passport');
const githubUsers = require("../lib/model/github")
const GitHubStrategy = require("passport-github2").Strategy
const {GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET , GITHUB_CALLBACK_URL} = process.env


passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: GITHUB_CALLBACK_URL
  },async(accessToken , refreshToken , profile , done)=>{
        const Profile={
            githubId:profile.id,
            name:profile.displayName,
            email:profile._json.email,
            profile_picture:profile._json.avatar_url
        }

        let isUserExist =await githubUsers.query().select("githubId").where("githubId",Profile.githubId)
        // console.log(isUserExist)
        if(isUserExist!=undefined && isUserExist.length){
            const userUpdate=await githubUsers.query().update(Profile).where("githubId",Profile.githubId);
            console.log("User already exists")
        }else{
            const createUser = await githubUsers.query().insert(Profile)
            console.log("Data inserted!")
        }
        done(null , Profile)
    }   
));