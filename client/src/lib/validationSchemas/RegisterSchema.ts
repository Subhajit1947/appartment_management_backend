import * as z from "zod"

const usernameRegex=/^[a-zA-Z0-9_@+.-]+$/

export const registerUserSchema=z.object({
    username:z.string().regex(usernameRegex,{
        message:"Usernames can only contain letters(uppercase and lowercase), digits, _, @, +, ., and -"
    }),
    first_name:z.string().trim().min(2,{
        message:"first name must be at least 2 characters long"
        }).max(50,{
        message:"first name must be less than 50 characters"
    }),
    last_name:z.string().trim().min(2,{
        message:"last name must be at least 2 characters long"
        }).max(50,{
        message:"last name must be less than 50 characters"
    }),
    email:z.string().trim().email({message:"enter a valid email address"}),
    password:z.string().min(8,{message:"password must be at least 8 character long"}),
    re_password:z.string().min(8,{message:"confirm password must be at least 8 character long"}),

}).refine((data)=>data.password===data.re_password,{
    message:"password do not match",
    path:["re_password"]
})


export type TRegisterUserSchema=z.infer<typeof registerUserSchema>









