import * as z from "zod"

export const passwordResetConfirmSchema=z.object({
    uid:z.string().trim(),
    token:z.string().trim(),
    new_password:z.string().min(8,{message:"password must be at least 8 character long"}),
    re_new_password:z.string().min(8,{message:"confirm password must be at least 8 character long"}),

}).refine((data)=>data.new_password===data.re_new_password,{
    message:"password do not match",
    path:["re_new_password"]
})


export type TPasswordResetConfirmSchema=z.infer<typeof passwordResetConfirmSchema>









