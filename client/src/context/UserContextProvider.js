import  {  createContext, useContext } from 'react';

export const UserContext = createContext({
  user:null,
 
  
});

export const UserContextProvider = UserContext.Provider;


export default function useAuth() {
 
  const context =useContext(UserContext);
  if(!context) throw Error("please use a context !!!!!!!!!!!!!!!!!!!!!")
  return useContext(UserContext);
}
