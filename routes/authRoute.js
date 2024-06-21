import express from 'express'

import {registerController,loginController, testController, forgotPasswordController, updateProfileController} from "../controllers/authController.js";
import { isAdmin, requireSingnIN} from '../middlewares/authMiddleware.js';
// router object
const router = express.Router();

//routing
// REGISTER || METHOD POST
router.post('/register',registerController);

//LOGIN || POST
router.post("/login",loginController);

// Forgot Password || Post
router.post('/forgot-password', forgotPasswordController)

//test routes
router.get("/test", requireSingnIN,isAdmin,  testController);

//protected User route auth
// yaha se request jaagi if ok the you acces the dashboard page
router.get("/user-auth", requireSingnIN, (req, res)=>{
    res.status(200).send({ ok: true});
})

// Protected Admin route auth
router.get("/admin-auth", requireSingnIN, isAdmin, (req, res)=>{
    res.status(200).send({ ok: true});
})

// update profile
router.put('/profile', requireSingnIN, updateProfileController)

export default router;