const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const errorMsg = 'Auth failed: email or password is wrong';

        const user = await UserModel.findOne({ email });
        if (!user) {
            console.log(`User with email ${email} not found`);
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            console.log(`Password mismatch for user ${email}`);
            return res.status(403).json({ message: errorMsg, success: false });
        }

        
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1s' }
        );

        return res.json({
            success: true,
            message: "Login successful",
            jwtToken,
            name: user.name,
            _id: user._id, 
        });
        
    } catch (err) {
        console.error('Internal server error:', err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

const deleteUser = async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error });
    }
  };

const updateUser = async (req, res) => {

    // console.log(req.body);
    try {
      const id = req.params.id;
      const userExist = await UserModel.findById(id);
      if (!userExist) {
        return res.status(404).json({ message: "User not found." });
      }
      const updatedData = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedData);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  };



module.exports = {
    signup,
    login,
    deleteUser,
    updateUser,
}