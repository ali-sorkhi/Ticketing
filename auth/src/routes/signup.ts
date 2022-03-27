import express, {
  //Request and Response are Types for TS
  Request,
  Response,
} from "express";
import {
  body,
  validationResult, //validation result is stored in this
} from "express-validator";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    //using express-validator for validating if email and password is valid, (in auth folder: npm install express-validator)
    body("email").isEmail().withMessage("Email is not valid"),
    body("password")
      .trim() //removes spaces from start and end
      .isLength({ min: 4, max: 20 })
      .withMessage("password is not valid"),
  ],
  (req: Request, res: Response) => {
    //---------------// *? error checking -----------------------------
    const errors = validationResult(req); //if validating process gets an error it will be saved in errors object

    if (!errors.isEmpty()) {
      //if errors object is not empty return it
      return res.status(400).send(errors.array());
    }
    //---------------// *? error checking -----------------------------

    const { email, password } = req.body; //getting email and pasword from request body
  }
);

export { router as signupRouter };
