import express from "express";

//controllers
import { registerController } from "../controllers/authController.js"
import { loginController } from "../controllers/authController.js"
import { forgotPasswordController } from "../controllers/authController.js"
// import { resetPasswordController } from "../controllers/authController.js"
import { testController } from "../controllers/testController.js"
import { isAdmin, isLoggedIn } from './../middlewares/authMiddlewares.js';

//router object
const router = express.Router();

//routes

router.post('/register', registerController);

router.post('/login', loginController);

router.post('/forgot-password', forgotPasswordController);

// router.post('/reset-password', resetPasswordController);

router.get('/test', isLoggedIn, isAdmin, testController);

// for user route protection
router.get('/user-auth', isLoggedIn, (req, res) => {
    res.status(200).send({
        success: true,
        message: "User Access Allowed!"
    })
});

// for admin route protection
router.get('/admin-auth', isLoggedIn, isAdmin, (req, res) => {
    res.status(200).send({
        success: true,
        message: "Admin Access Allowed!"
    })
});

export default router;
