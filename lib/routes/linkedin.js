

module.exports=((linkedinAuth,passport)=>{

    linkedinAuth.get('/linkedin',passport.authenticate('linkedin', {state:"SOME STATE"} ));

    linkedinAuth.get('/linkedin/callback',
        passport.authenticate('linkedin', {failureRedirect: '/login'}),
            function(req,res){
                res.redirect("/home")
            })

})