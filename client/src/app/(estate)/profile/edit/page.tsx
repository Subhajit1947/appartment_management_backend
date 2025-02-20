import { AuthFormHeader } from "@/components/forms/auth";
import EditProfileForm from "@/components/forms/profile/EditProfileForm";
import type { Metadata } from "next";

const metadata:Metadata={
  title:"Alpha Apartments | Profile Edit",
  description:"Signed in Users can edit their profile"
}


export default function page() {
  return (
    <div>
        <AuthFormHeader title="Update Profile"/>
        <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-lightGrey dark:bg-deepBlueGrey rounded-xl px-6 py-12 shadow sm:rounded-lg sm:px-12 md:rounded-3xl">
                {/* <h1 className="dark:text-babyPowder text-6xl">Edit Profile</h1> */}
              <EditProfileForm/>
            </div>

        </div>
    </div>
  )
}
