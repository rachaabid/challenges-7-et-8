const express = require('express');
const router = express.Router();
// const passport = require('passport')

const {signup, login} = require('../controlers/user.controlers');

router.post('/signup',
// passport.authenticate('bearer', {session: false}), 
signup);
router.post('/login', login);

module.exports = router;