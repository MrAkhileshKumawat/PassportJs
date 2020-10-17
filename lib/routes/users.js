const router = require("express").Router();
const passport= require("passport")

const googleAuth = router
require("./google")(googleAuth,passport)

const facebookAuth = router
require("./facebook")(facebookAuth,passport)

const linkedinAuth = router
require("./linkedin")(linkedinAuth,passport)

const githubAuth = router
require("./github")(githubAuth,passport)


module.exports = router