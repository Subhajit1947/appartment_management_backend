import { AuthFormHeader } from '@/components/forms/auth'
import React from 'react'

export default function RegisterPage() {
  return (
    <div>
        {/* <h1 className='dark:text-pumpkin text-6xl'>Register Page</h1> */}
        <AuthFormHeader 
          title='signup for an account' 
          staticText='Already have an account?'
          linkText='Login Here'
          linkHref='/login'
        />
    </div>
  )
}
