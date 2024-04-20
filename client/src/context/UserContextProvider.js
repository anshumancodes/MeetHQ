import  { useState, createContext, useContext } from 'react';

export const UserContext = createContext({
  user:null,
  setUser:()=>{}
});

export const UserContextProvider = UserContext.Provider;


export default function useAuth() {
  return useContext(UserContext);
}
