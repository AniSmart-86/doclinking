import express from "express";
import {getProfile, LoginUser, RegisterUser, updateProfile} from "../Controllers/userController.js";
import Protect from "../MidleWare/authMiddleWare.js";
import authUser from "../MidleWare/authUser.js";
import upload from "../multer.cjs";

const userRouter = express.Router();


userRouter.post("/register", RegisterUser);
userRouter.post("/login", LoginUser);
userRouter.get("/get", authUser, getProfile);
userRouter.post("/update-profile", upload.single('image'),authUser, updateProfile);
// router.post("/login", LoginUser);
// router.get("/logout", LogoutUser);
// router.get("/getuser", Protect, GetUserData);
// router.get("/loginstatus", LoginStatus);
// router.patch("/updateuser", Protect, UpdateUser);
// router.patch("/updatephoto", Protect, UpdatePhoto);



export default userRouter;