import React, { useEffect, useState } from 'react'
import { CircleUser } from 'lucide-react'
import { LogOutIcon } from 'lucide-react'

const UserProfile = () => {
    const [userName, setUserName] = useState('');
    const [useremail, setuseremail] = useState('');
    const [isOpen, setisOpen] = useState(false);

    useEffect(() => {
        setUserName("anshcdx")
        setuseremail("anshumanprof01@gmail.com")
    }, [])

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
               
               {
                isOpen ? null :( <div className='flex gap-3' >
                <CircleUser onClick={handleOpenModal} />
                <div>{userName}</div>
            </div>)
               }
                {
                    isOpen && (
                        <div className="modal">
                            <div className="modal-content bg-white">
                                <span className="close" onClick={handleCloseModal}>X</span>
                                <div className='flex gap-1 flex-col ' >
                                    <CircleUser />
                                    <div>{userName}</div>
                                    <div>{useremail}</div>
                                </div>
                                <div >
                                    <button onClick={handleLogout} className='flex gap-1'> <LogOutIcon />logout</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default UserProfile
