import * as z from "zod"



export const loginUserSchema=z.object({
    email:z.string().trim().email({message:"enter a valid email address"}),
    password:z.string().min(8,{message:"password must be at least 8 character long"}),
})


export type TLoginUserSchema=z.infer<typeof loginUserSchema>









