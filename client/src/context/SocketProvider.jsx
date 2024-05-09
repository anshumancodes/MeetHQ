import React, { useState,useMemo } from 'react'
import { useContext } from 'react'
import {io} from "socket.io-client"
const SocketContext = React.createContext(null)

export const useSocket = () => {
    return useContext(SocketContext)
    return socket;
}

export 
function SocketProvider({children}) {
  
    const socket=useMemo(()=>io("localhost:8001"),[])
    

  return (
    <SocketContext.Provider value={socket}>
    {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider
