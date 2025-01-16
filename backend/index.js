const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const UserModel = require('./Models/User');
require('dotenv').config();
require('./Models/db');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', AuthRouter);

// Fetch All User Details
app.get("/userDetail", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving user details", error: err });
  }
});


// Start Server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
