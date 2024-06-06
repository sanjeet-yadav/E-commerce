import express from 'express'

import {registerController,loginController, testController} from "../controllers/authController.js";
import { isAdmin, requireSingnIN} from '../middlewares/authMiddleware.js';
// router object
const router = express.Router();

//routing
// REGISTER || METHOD POST
router.post('/register',registerController);

//LOGIN || POST
router.post("/login",loginController);

//test routes
router.get("/test", requireSingnIN,isAdmin,  testController);

//protected route auth
// yaha se request jaagi if ok the you acces the dashboard page
router.get("/user-auth", requireSingnIN, (req, res)=>{
    res.status(200).send({ ok: true});
})

export default router;