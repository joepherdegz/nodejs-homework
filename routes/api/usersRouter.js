import express from "express";
import { controlWrapper } from "../../helpers/controlWrapper.js";
import { signupUser, loginUser, logoutUser, getCurrentUsers, updateUserSubscription } from "../../controllers/usersController.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";

const router = express.Router();

/* POST: // http://localhost:3000/api/users/signup
{
  "email": "example@example.com",
  "password": "examplepassword"
}
*/
router.post("/signup", controlWrapper(signupUser));

/* POST: // http://localhost:3000/api/users/login
{
  "email": "example@example.com",
  "password": "examplepassword"
}
*/
router.post("/login", controlWrapper(loginUser));

/* GET: // http://localhost:3000/api/users/logout */
router.get("/logout", authenticateToken, controlWrapper(logoutUser));

/* GET: // http://localhost:3000/api/users/current */
router.get("/current", authenticateToken, controlWrapper(getCurrentUsers));

/* PATCH: // http://localhost:3000/api/users/
{
    "subscription":"pro"
}
*/
router.patch("/", authenticateToken, controlWrapper(updateUserSubscription));

export { router };