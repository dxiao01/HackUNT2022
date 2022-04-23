import React from 'react'

const Profile = () => {
  return (
    <div>
      <div class="flex items-center justify-center">
        <img src = "https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec=s180-rw" class = "rounded-full w-32"></img>
      </div> 

      <div class = "bg-white w-1/3 mt-10 rounded-lg items-center justify-center">
        <div class ="flex items-center justify-center pt-5 flex-col">
          <h1 class="text-black-400 bg-blue-400 font-semibold text-xl p-4 mt-5">Username</h1>
          <h1 class="text-black-400 text-sm p-4 bg-blue-400">title stuff</h1>
          <h1 class ="text-black-400 text-sm text-center p-4">profile text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
        </div>

      </div>
    </div>

  )
}

export default Profile