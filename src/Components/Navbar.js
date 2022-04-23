import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        
<nav class="bg-gray-800 fixed w-full">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="flex-1 flex items-center justify-start">
        
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
          <Link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
            <a href="#Home">Home</a>
          </Link>

          <Link to="/login" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
            <a href="#Login">Login</a>
          </Link>

          <Link to="/resources" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
            <a href="#Resources">Resources</a>
          </Link>
          <Link to="/profile" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
            <a href="#Login">Profile</a>
          </Link>
          <Link to="/signup" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
            <a href="#Signup">Signup</a>
          </Link>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 text-white">
        <div class="text-gray-300  px-3 py-2 rounded-md text-2xl font-extrabold">
            Spaceverse
        </div>
    </div>
  </div>

 
  
  </div>
</nav>
    )
}

export default Navbar
