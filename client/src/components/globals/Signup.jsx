import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
      } else {
        const error = await response.text();
        console.error('Error:', error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img src="/imgs/meetHQ.svg" alt="" className='w-11'/>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-gray-200">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-gray-300">
            Already have an account?{' '}
            <a
              href="/signin"
              title=""
              className="font-medium text-gray-400 transition-all duration-200 hover:underline"
            >
              Sign In
            </a>
          </p>

          <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-4'>
            <div className='space-y-5' >
              <label htmlFor="name" className='text-gray-200'>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className='inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 bg-transparent border border-gray-100 text-gray-500'
              />
            </div>
            <div className='space-y-5'>
              <label htmlFor="email" className='text-gray-200'>Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-md bg-gray-100 px-3.5 py-2.5 font-semibold leading-7 text-gray-950 hover:bg-black/80">Create Account <ArrowRight className="ml-2" size={16} /></button>
          </form>
        </div>
      </div>
    </section>
  );
}
