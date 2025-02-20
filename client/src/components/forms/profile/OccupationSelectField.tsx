import React,{useEffect} from 'react'
import dynamic from 'next/dynamic'
import { Occupation } from '@/types'
import { Control, Controller, UseFormSetValue } from 'react-hook-form'
import { TProfileSchema } from '@/lib/validationSchemas'
import { useGetUserProfileQuery } from '@/lib/redux/features/users/usersApiSlice'
import { occupationOptions } from '@/constants'
import Select from "react-select"
import customStyles from '../selectStyles'
import { Briefcase } from 'lucide-react'
const ClientOnly=dynamic<{children:React.ReactNode}>(
    ()=>Promise.resolve(({children})=><>{children}</>),
    {ssr:false},
)

function isOccupation(value:any):value is Occupation{
    return [
        "mason",
        "carpentar",
        "plumber",
        "roofer",
        "painter",
        "electricians",
        "hvac",
        "tenant"
    ].includes(value)
}

interface OccupationSelectFieldProps{
    setValue:UseFormSetValue<TProfileSchema>
    control:Control<TProfileSchema>
}

export default function OccupationSelectField({setValue,control}:OccupationSelectFieldProps) {
    const {data:profileData}=useGetUserProfileQuery()
    const profile=profileData?.profile
    useEffect(()=>{
            if(profile?.occupation){
                const occupationValue=occupationOptions.find((option)=>option.value===profile.occupation)
                if(occupationValue && isOccupation(occupationValue.value)){
                    setValue("occupation",occupationValue.value)
                }
            }
        },[profile,setValue])
  return (
    <div>
        <label htmlFor='occupation' className='h4-semibold dark:text-babyPowder'>Occupation</label>
        <div className='mt-1 flex items-center space-x-3'>
            <Briefcase className='dark:text-babyPowder size-8'/>
            <ClientOnly>
                <Controller control={control} name='gender' render={
                    ({field})=>(
                        <Select className='mt-1 w-full' {...field} 
                            options={occupationOptions} 
                            value={occupationOptions.find((option)=>option.value===field.value)}
                            onChange={(option)=>field.onChange(option?.value)}
                            instanceId={"occupation-select"}
                            styles={customStyles}
                        />
                    )
                }/>

            </ClientOnly>
        </div>
    </div>
  )
}
