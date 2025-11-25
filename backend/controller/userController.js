import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User_Model from "../models/UserModel.js";

const get_Token = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


// Routes for use Login
const login_User = async  (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User_Model.findOne({email});

        // Checking User with this email in database
        if (!user) {
            return res.json({
                success: false,
                message: "User Doesnot Exist!"
            })
        }

        // Comparing Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = get_Token(user._id);
            res.json({
                success: true,
                token
            });
        }else{ //if Password match
            res.json({
                success: false,
                message: "Invalid Credentails!"
            })
        }

    } catch (error) {
        console.log(error) 
        res.json
    }
    
}


// Routes for user Register
const register_User = async (req, res) => {
    try {
            
        const { name, email, password } = req.body;

        // Checking User Exitance
        const user_Exist = await User_Model.findOne({email});
        if (user_Exist) {
            return res.json({
                success: false,
                messege: "User Already Exist!"
            });
        }

        // Checking Email and Password Validation
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                messege: "Enter a Valid Email!"
            });
        }
        if(password.length < 8){
            return res.json({
                success: false,
                messege: "Enter a Strong Password!"
            });
        }

        // Hashing User Password
        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password, salt);

        // Creating User
        const newUser = new User_Model({
            name, email, password: hashed_password
        });

        const user = await newUser.save();

        const token = get_Token(user._id);

        res.json({
            success: true,
            token
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            messege: error.messege
        })
    }
}

// Route for admin Login
const admin_Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({
                success: true,
                token
            })
        }else{
            res.json({
                success: false,
                message: "Invalid Credentials"
            })
        }

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            messege: error.messege
        })
    }
}

export { login_User, register_User, admin_Login }

