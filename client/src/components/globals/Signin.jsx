import React,{useState,useEffect} from 'react'
import { useNavigate} from "react-router-dom";
import { ArrowRight } from 'lucide-react'
import axios from "axios"
import useAuth from '../../context/UserContextProvider';




export default function Signin() {
  
 
  
  
  // form data handle
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    
    
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/user/login",formData).then(function (response) {
      if(response.data.data){
        // if the useData exists , that is a  token is assigned to the user
        localStorage.setItem("token",response.data.data.user);
        console.log(response.data.data.user);
        navigate("/meet");



      }

      
      
    
     
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  
  
 

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
          <img src="/imgs/meetHQ.svg" alt="" className='w-11'/>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-gray-100">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Don&apos;t have an account?{' '}
            <a
              href="/signup"
              title=""
              className="font-semibold text-white transition-all duration-200 hover:underline"
            >
              Create a free account
            </a>
          </p>
          <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-4' >
            
            <div className='space-y-5'>
              <label htmlFor="email" className='text-gray-200'>Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete=''
                placeholder="Email"
                className='inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 bg-transparent border border-gray-100 text-gray-500'
              />
            </div>
            <div className='space-y-5'>
              <label htmlFor="password" className='text-gray-200'>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className='inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 bg-transparent border border-gray-100 text-gray-500'
              />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-md bg-gray-100 px-3.5 py-2.5 font-semibold leading-7 text-gray-950 hover:bg-gray-500">Create Account <ArrowRight className="ml-2" size={16} /></button>
          </form>
          
        </div>
      </div>
    </section>
  )
}


