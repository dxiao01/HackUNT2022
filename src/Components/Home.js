import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
  return (
    <div class="h-screen overflow-auto mb-4 bg-white">
        
        <div class="max-w-6xl px-12 mx-auto text-center">
            <div class="space-y-12 md:text-center">
                <div class="max-w-3xl mb-10 space-y-5 sm:mx-auto sm:space-y-4">
                    <h2 class="relative text-4xl font-extrabold tracking-tight sm:text-5xl mt-10">About Us</h2>
                </div>
            </div>
    
            <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div class="w-full border border-gray-200 rounded-lg shadow-lg">
    
                    <div class="flex flex-col items-center justify-center p-10">
                        <h2 class="text-lg font-medium">Daniel Xiao</h2>
                        <p class="font-medium text-blue-500">Front-end designer </p>
                        <p class="text-black">Task 1
                    </p></div>
    
                </div>
    
                <div class="w-full border border-gray-200 rounded-lg shadow-lg">
    
                    <div class="flex flex-col items-center justify-center p-10">
                        <h2 class="text-lg font-medium">Dhruv Chanana</h2>
                        <p class="font-medium text-blue-500">Backend developer</p>
                        <p class="text-black">Task 2
                    </p></div>
    
    
                </div>
    
                <div class="w-full border border-gray-200 rounded-lg shadow-lg">
    
                    <div class="flex flex-col items-center justify-center p-10">
                        <h2 class="text-lg font-medium">Jathin Pranav Singaraju</h2>
                        <p class="font-medium text-blue-500">Front-end designer</p>
                        <p class="text-black">Task 3
                    </p></div>
    
    
                </div>
    
                <div class="w-full border border-gray-200 rounded-lg shadow-lg">
    
                    <div class="flex flex-col items-center justify-center p-10">
                        <h2 class="text-lg font-medium">James Yang</h2>
                        <p class="font-medium text-blue-500">Logistics</p>
                        <p class="text-black">Task 4
                    </p></div>
    
    
                </div>
    
    
            </div>
    
        </div>
    </div>
  )
};

export default Home;