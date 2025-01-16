const { signup, login,deleteUser,updateUser } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const router = require('express').Router();
const UserModel = require('../Models/User');

// Login Route
router.post('/login', loginValidation, login);

// Signup Route
router.post('/signup', signupValidation, signup);

// DELETE route 
router.delete('/deleteUser/:id', deleteUser);


// PUT route 
router.put('/updateUser/:id', updateUser);

module.exports = router;
