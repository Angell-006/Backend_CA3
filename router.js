const express=require("express");
const router=express.Router();

router.put("/user",async(req,res) =>{
    try{
        const {email,password}=req.body;
        if(!email||!password){
            return res.send(400).json({message:"Email not found!"});
        }
        return res.send(201).json({message:"User information updated!"});
    }catch(err){
        return res.send(500).json({message:"Internal server error:",err});
    }
})

router.delete("/delete-user",async(req,res)=>{
    try{
        if(!email||!password){
            return res.send(400).json({message:"Email not found!"});
        }
        return res.send(201).json({message:"User deleted successfully"});
    }catch(err){
        return res.send(500).json({message:"Internal server error: ",err});
    }
});
module.exports=router;
