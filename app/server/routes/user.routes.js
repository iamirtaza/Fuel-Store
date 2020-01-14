const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../helpers/auth");

// routes
// router.post("/login", userController.authenticate);
router.get("/login/:username/:password", userController.login);
router.post("/register", userController.register);
router.get('/getTalentById/:id', userController.getTalentById);
router.get('/getAllTalents', userController.getAllTalents);
router.post('/updateUser', auth.authorize(), userController.updateUser);
router.post('/updatePassword', auth.authorize(), userController.updatePassword);
router.get("/validateUserName/:username", userController.validateUserName);
router.delete("/deActivateUser/:id", auth.authorize(), userController.deActivateUser);
router.get("/getAllRoles", auth.authorize(), userController.getAllRoles);
router.get("/getUserRegions", auth.authorize(), userController.getUserRegions);
router.post("/updateUserRegion", auth.authorize(), userController.updateUserRegion);
router.post("/addUserRegion", auth.authorize(), userController.addUserRegion);
router.delete("/deleteUserRegion/:id", auth.authorize(), userController.deleteUserRegion);

module.exports = router;
