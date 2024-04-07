import React from "react";
import { Settings } from "lucide-react";
import { ShieldQuestion } from "lucide-react";
import CarouselSlider from "../globals/carouselSlider";

const Meet = () => {
  const images = [
    '/imgs/1.svg',
    '/imgs/2.svg',
    '/imgs/3.svg',
  ];
  
  return (
    <div>
      <main className="flex flex-col gap-20 lg:gap-32 mb-10">
        <nav className="text-gray-400 flex justify-between px-5 lg:px-20 items-center py-2">
          <img src="/imgs/meetHQ.svg" alt="" className="w-11" />
          <div className="flex gap-3 items-center">
            <span>
              {new Date().toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}{" "}
              -{" "}
              {new Date().toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <Settings />
            <ShieldQuestion />
          </div>
        </nav>


        <div className="flex justify-center w-full overflow-x-hidden ">
          <div className=" flex flex-col lg:flex lg:flex-row gap-20">

            <div className="flex flex-col gap-6">
              <div className="w-full flex flex-col gap-2  items-center lg:items-start">
              <h1 className="text-gray-200 text-2xl font font-semibold text-center w-[90%] lg:text-3xl lg:text-left lg:w-full">
               video call and meetings for everyone
              </h1>
              <p className="text-gray-400 text-center w-[90%] lg:text-left">
                MeetHQ provides secure, easy-to-use video calls and
                meetings for everyone, on any device.
              </p>
              </div>
           
            
          
            
              <form
                action=""
                method="post"
                className="flex gap-3 justify-center md:justify-start"
              >
                <input
                  type="text"
                  placeholder=" meeting-id/link"
                  className="p-1 outline-none lg:w-[400px]"
                />
                <button
                  type="submit"
                  className="text-gray-200 bg-gray-500 py-2 px-5 rounded-sm"
                >
                  Join
                </button>
              </form>
            </div>
           
            <CarouselSlider images={images}/>
            
          </div>
        </div>

      </main>
    </div>
  );
};

export default Meet;
