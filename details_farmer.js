const express = require("express");
const details_farmer = express.Router();
const userModel=require("./models/usermodels");

details_farmer.post("/login",signupUser);



async function signupUser(req, res) {
    console.log("hello");
    try {
      let userObj = req.body;
      console.log(req.body);
      
      console.log("user");
      let user = await userModel.create(userObj);
      console.log("user", user);
      res.json({
        message: "user signedUp",
        user: userObj,
      });
    } catch (err) {
      console.log(err);
      res.json({ message: err.message });
    }
  }


module.exports = details_farmer;

