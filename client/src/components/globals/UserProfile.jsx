import React, { useState } from 'react'
import { CircleUser } from 'lucide-react'
import {LogOutIcon} from 'lucide-react'

const UserProfile = () => {
    const [userName,setUserName]=useState('');
    const[useremail,setuseremail]=useState('');
    const [isOpen,setisOpen]=useState(false);

    const handleOpenModal = () => {
        setisOpen(true);
    }

    const handleCloseModal = () => {
        setisOpen(false);
    }

    const handleLogout = () => {
        // Add your logout logic here
    }

    return (
        <div>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-3' onClick={handleOpenModal}>
                    <CircleUser/>
                    <div>{userName}</div>
                </div>
                {
                    isOpen? <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</button>
                            </form>
                            <div className='flex gap-3' >
                                <CircleUser/>
                                <div>{userName}</div>
                                <div>{useremail}</div>
                            </div>
                            <div>
                                <button onClick={handleLogout}> <LogOutIcon/>logout</button>
                            </div>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        </div>
                    </dialog> : null
                }
            </div>
        </div>
    )
}

export default UserProfile
