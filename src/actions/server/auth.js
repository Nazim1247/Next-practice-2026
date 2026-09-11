"use server";
import bcrypt from 'bcryptjs';
import { connect } from "@/app/lib/dbConnect";

export const postUser = async (payload)=>{
    // console.log(payload);

    // check user exist or not
    const isExist = await connect("users").findOne({email: payload.email});
    if(isExist){
        return {
            success: false,
            message: "user already exist"
        }
    }

    const hashPassword= await bcrypt.hash(payload.password, 10);
    
    // create new user
    const newUser ={
        ...payload,
        createdAt: new Date().toISOString(),
        role: "user",
        password: hashPassword
    }
    // console.log(newUser);

    // send user to database
    const result = await connect("users").insertOne(newUser);
    if(result.acknowledged){
        return {
            success: true,
            message: `user created with ${result.insertedId.toString()}`
        }
    }
}