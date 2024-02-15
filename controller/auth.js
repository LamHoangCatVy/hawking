import User from "../models/User.js";
import bcrypt from "bcrypt";
const register = async (req, res) => {
    const { name, email, password } = req.body;
    if(!email || !password || !name){
        return res.status(400).json({message: "Please provide all the fields"})
    }
    const userAlreadyExists = await User.findOne({email});

    if(userAlreadyExists){
        return res.status(400).json({message: "Email already exists"})
    }
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({name, email, password: passwordHash});
    const token = user.createJWT();
    
    res.status(201).json({
        user: {
            email: user.email,
            name: user.name,
        },
        token
    })
}
const login = async (req, res) => {
    const {email, password } = req.body;
    if(!email ||  !password){
        return res.status(400).json({message: "Please provide all the fields"})
    }
    const user = await User.findOne({email}).select("+password");
    console.log(user);
    if(!user){
        return res.status(400).json({message: "Invalid credentials"});
    }
    const isCorrect = await user.correctPassword(password);
    if(!isCorrect){
        return res.status(400).json({message: "Wrong password"});
    }
    const token = user.createJWT();
    user.password = undefined;
    res.status(200).json({
        user,
        token
    })

}

export {register , login};