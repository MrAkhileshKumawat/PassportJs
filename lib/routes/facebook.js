
module.exports = ((facebookAuth,passport)=>{

    facebookAuth.get('/facebook',passport.authenticate('facebook'));

    facebookAuth.get('/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
            function(req, res) {
                res.redirect('/home');
  });

})