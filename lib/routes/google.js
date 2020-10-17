module.exports=((googleAuth,passport)=>{

    googleAuth.get('/google',
    passport.authenticate('google', { scope:
        ['email','profile' ] }
    ));

    googleAuth.get('/google/callback',
        passport.authenticate('google', {failureRedirect: '/login'}),
            function(req,res){
                res.redirect("/home")
            })
})