import React from 'react'
import {UserSquareIcon} from "lucide-react"
import {UserCogIcon} from "lucide-react"
import {LucideBadgeHelp} from "lucide-react"
import {LogOut} from "lucide-react"

const ExpandedUserProfile = () => {
  return (
    <div>
      <div className='flex flex-col bg-gray-200 w-[300px] right-3 top-16 absolute rounded-lg border border-gray-400 z-50'>

        <div className='py-2 px-1 flex gap-2'>
            <div className=''>
                <img src="../imgs/profile-pfp-standard.jpg" alt="" className='w-20  rounded-full' />
            </div>
            <div className='flex flex-col gap-1  justify-center'>
                <span className='text-gray-900 font-semibold text-xl'>Anshuman</span>
                <span className='text-gray-400 font-thin text-sm'>anshuman@gmail.com</span>

            </div>

        </div>
        <div className='bg-gray-300 h-[2px] w-[100%]'></div>
        <div className='py-2 px-1 flex flex-col gap-2'>
        <div className='flex flex-col gap-1  justify-center'>
                <span className='text-gray-900 font-normal text-xl flex gap-2'><UserSquareIcon className='text-gray-400'/> view Profile</span>
                <span className='text-gray-900 font-normal text-xl flex gap-2'><UserCogIcon className='text-gray-400'/>Account settings</span>

            </div>

        </div>
        <div className='bg-gray-300 h-[2px] w-[100%]'></div>
        <div className='py-2 px-1 flex flex-col gap-2'>
        <span className='text-gray-900 font-normal text-xl flex gap-2'><LucideBadgeHelp className='text-gray-400'/>Help and Support</span>
            
        </div>
        <div className='bg-gray-300 h-[2px] w-[100%]'></div>
        <div className='py-2 px-1 flex flex-col gap-2'>
        <span className='text-gray-900 font-normal text-xl flex gap-2'><LogOut className='text-gray-400'/ >Logout</span>
        </div>
      </div>
    </div>
  )
}

export default ExpandedUserProfile
