// const express = require("express");
// const app = express();
// const cors=require("cors");
// const port=5000;
// app.use(cors);
// app.use(express.json());
// app.listen(port, function () {
  //   console.log("server listening on port {port}");
  // });
  // const details_farmer=require("./details_farmer.js");
  
  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  const app = express();
  const userModel= require('./models/usermodels')
  const path=require('path')
  
  app.use(express.json());
  app.use(cors());
  app.use(express.static(path.join(__dirname ,'public')));
  const port = process.env.PORT || 5000;

  
  // mongoose.connect('mongodb://localhost:27017/reactdata', { useNewUrlParser: true });
    app.post('/login', async(req, res) => {
    
    const userObj = req.body;
    let user = await userModel.create(userObj);

    try {
      
      const{Name,Adress,Phone,E_mail,Farm_Location,Area_Cultivation}=req.body;
      let userObj=req.body;
      console.log("user"+" "+userObj.Name);
      let user = await userModel.create(userObj);
      
      console.log("req_body"+" "+user);

      res.json({
        message: "user signedUp",
        user: userObj,
      });
    }  
    catch(err) {
        console.log(err)
    }
});



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

