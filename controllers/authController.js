
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async(req,res) => {
    try{
        const {name, email, password, phone, address} = req.body;
        // validations
        if (!name){
            return res.send({error: "Name is Required" })
        }
        if (!email){
            return res.send({error: "Email is Required"})
        }
        if (!password){
            return res.send({error: "Password is Required"})
        }
        if (!phone){
            return res.send({error: "Phons Required"})
        }
        if (!address){
            return res.send({error: "Address is Required"})
        }

        // cheak user
        const exisitingUser = await userModel.findOne({email});
        //existing user
        if(exisitingUser){
            return res.status(200).send({
                sucess:true,
                message:"Already Register please login",
            });
        }
        //register user
        const hashedPassword = await hashPassword(password);
        // save
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword
        }).save();
            
            res.status(201).send({
                sucess:true,
                message:'User Register Successfully',
                user
            });
        

    } catch (error){
        console.log(error)
        res.status(500).send({
            sucess: false,
            message:'Error in Registeration',
            error,
        });
    }
};

//POST LOGIN
export const loginController = async (req,res)=>{
    try{
        const {email, password}= req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                sucess: false,
                message:"Invalid email or password",
            });
        }
        // cheak user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                sucess: false,
                message:"email is not registered",
            });
        }
        // for decryptin
        const match = await comparePassword(password, user.password);
        if(!match){
            return res.status(200).send({
                sucess:false,
                message:'Invaild Password'
            })
        }
        //token
        const token = await JWT.sign({ _id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"

        });
        res.status(200).send({
            sucess: true,
            message:'login successfully',
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
            },
            token,
            
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            sucess:false,
            message:'Error in login',
            error,
        });
    }
};

// test controlller
export const testController = (req,res) =>{
    res.send('Protected Route');
}