"use client"

import ProtectedRoute from '@/components/shared/ProtectedRoutes'
import Spinner from '@/components/shared/Spinner'
import { useGetUserProfileQuery } from '@/lib/redux/features/users/usersApiSlice'
import React from 'react'

function ProfilePgeContent() {
    const {data,isLoading}=useGetUserProfileQuery()
    if(isLoading){
        return(
            <div className='flex-center pt-32'>
                <Spinner size="xl"/>
            </div>
        )
    }
  return (
    <div>
        <h1>{data?.profile.username}&apos;s Profile</h1>
    </div>
  )
}

export default function ProfilePage(){
    return(
        <ProtectedRoute>
            <ProfilePgeContent/>
        </ProtectedRoute>
    )
}
