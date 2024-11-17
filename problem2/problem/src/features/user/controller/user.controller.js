// Please don't change the pre-written code
// Import the necessary modules here

import { addUser, confirmLogin } from "../model/user.model.js";

export const registerUser = (req, res, next) => {
  // Write your code here
  const data = req.body; 
  const user = addUser(data);
  //res.status(201).send(user);
  res.status(201).json({
    status: "success",
    user,
  });
};

export const loginUser = (req, res) => {
  // Write your code here
  const data = {
    email: req.body.email,
    password: req.body.password,
  };
  const result = confirmLogin(data);
  if (!result) {
    return res.status(400).json({
      status: "failure",
      msg: "invalid user details",
    });
  } else {
    return res.status(200).json({
      status: "success",
      msg: "login successful",
    });;
  }
};