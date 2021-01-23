import routes from "../routes";
import User from "../models/User";

export const getJoin = (req,res)=>{
    res.render("join",{pageTitle:"Join"});
};
export const postJoin = async(req,res)=>{
    const{
     body:{ name,email,password, password2}
    }=req;
    if(password!==password2){
        res.status(400);
        res.render("join",{pageTitle:"Join"});
    }else{
        //TO DO:Register User
        const user = await User.create({
            
        })
        // To Do: Log user in
        res.redirect(routes.home);
    }
};
export const getLogin = (req,res)=>res.render("login",{pageTitle:"Log In"});
export const postLogin = (req,res)=>{
    res.redirect(routes.home);
}
export const logout = (req,res)=>{
    res.redirect(routes.home);
};
export const userDetail =(req,res)=>res.render("UserDetail",{pageTitle:"User Detail"});
export const editProfile =(req,res)=>res.render("EditProfile",{pageTitle:"Edit Profile"});
export const changePassword =(req,res)=>res.render("ChangePassword",{pageTitle:"Change Password"});