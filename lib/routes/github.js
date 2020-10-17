module.exports=((githubAuth,passport)=>{

    githubAuth.get('/github',
        passport.authenticate('github', { scope: [ 'user:email' ] }));

    githubAuth.get('/github/callback', 
        passport.authenticate('github', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/home');
    });

})
 