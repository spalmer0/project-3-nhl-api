// require modules and set up router object
const express = require('express').Router();



// require the controller
const usersCtrl = require('../../controllers/users');


// define a signup route;
router.post('/signup', usersCtrl.signup);

// export your router
module.exports = router;