import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            requried:true,
            min:2,
            max:50,
        },
        lastName:{
            type:String,
            requried:true,
            min:2,
            max:50,
        },
        email:{
            type:String,
            requried:true,
            max:50,
            unique:true,
        },
        password:{
            type:String,
            requrie:true,
            min:5,
        },
        picturePath:{
            type:String,
            default:"",
        },
        friends:{
            type:Array,
            default:[]
        },
        location:String,
        occupation:String,
        viewedProfile:Number,
        impressions:Number,
    },{timestamps:true}
);

const User = mongoose.model("User",userSchema);
export default User;