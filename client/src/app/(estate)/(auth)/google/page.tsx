"use client"

import Spinner from '@/components/shared/Spinner'
import { useSocialAuth } from '@/hooks'
import { useSocialAuthenticationMutation } from '@/lib/redux/features/auth/authApiSlice'
import React, { Suspense } from 'react'

export default function GoogleLoginPage() {
  return (
    <Suspense
      fallback={
        <div className='flex-center pt-32'>
          <Spinner size='xl'/>
        </div>
      }
    >
      <GoogleLoginContent/>
    </Suspense>
  )
}

function GoogleLoginContent(){
  const [socialAuthentication]=useSocialAuthenticationMutation()
  useSocialAuth(socialAuthentication,"google-oauth2")
  return null
}
