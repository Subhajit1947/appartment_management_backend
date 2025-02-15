"use client"
import React from 'react'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useResetPasswordConfirmMutation } from '@/lib/redux/features/auth/authApiSlice'
import { useForm } from 'react-hook-form'
import { passwordResetConfirmSchema, TPasswordResetConfirmSchema } from '@/lib/validationSchemas'
import { extractErrorMessage } from '@/utils'
import { toast } from 'react-toastify'
import { useParams, useRouter } from 'next/navigation'

import { FormFieldComponent } from '@/components/forms/FormFieldComponent'
import { Button } from '@/components/ui/button'
import Spinner from '@/components/shared/Spinner'


export default function PasswordResetConfirmForm() {
    const router=useRouter()
    const {uid,token}=useParams()
    const [resetPasswordConfirm,{isLoading}]=useResetPasswordConfirmMutation()
    const {register,handleSubmit,reset,formState:{errors}}=useForm<TPasswordResetConfirmSchema>({
        resolver:zodResolver(passwordResetConfirmSchema),
        mode:"all",
        defaultValues:{
            uid:uid as string,
            token:token as string,
            new_password:"",
            re_new_password:""
        }
    })
    const onSubmit=async(values:z.infer<typeof passwordResetConfirmSchema>)=>{
        try {
            await resetPasswordConfirm({...values,uid:uid as string,token:token as string}).unwrap()
            router.push("/login")
            toast.success("your password was reset")
            reset()
        } catch (error) {
            const errorMessage=extractErrorMessage(error)
            toast.error(errorMessage||"An error occurred")
        }
    }
  return (
    <main>
        <form noValidate onSubmit={handleSubmit(onSubmit)} className='flex w-full max-w-md flex-col gap-4'>
            
            <FormFieldComponent
                label='New Password'
                name='new_password'
                register={register}
                isPassword={true}
                errors={errors}
            />
            <FormFieldComponent
                label='Confirm New Password'
                name='re_new_password'
                register={register}
                isPassword={true}
                errors={errors}
            />
            <Button type='submit'
                className='h4-semibold bg-eerieBlack dark:bg-pumpkin w-full text-white'
                disabled={isLoading}
            >
                {isLoading?<Spinner size='sm'/>:`Confirm new Password`}
            </Button>
        </form>
    </main>
  )
}
