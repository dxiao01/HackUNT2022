import React from 'react'

const Profile = () => {
  return (
  <div class="flex items-center justify-center">
    <div class="bg-white w-3/4 mt-10 rounded-lg">
      <div class="flex items-center justify-center pt-10 flex-col">
        <img src="https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec=s180-rw" class="rounded-full w-32"></img>
        <h1 class="text-gray-800 font-extrabold text-3xl mt-5">Username</h1>
        <h1 class="text-gray-500 text-sm">Total Stars: xxx</h1>
        <h1 class="text-gray-500 text-sm">Post count: xxx</h1>
        <h1 class="text-gray-500 text-sm p-4 text-center">
          bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>
      </div>
      <div class="flex items-center justify-center pt-10 flex-col">
        <h1 class = "text-gray-800 font-extrabold text-3xl mt-5">Posts</h1>
        <div class="w-full px-12 mx-auto text-center">
            <div class="grid grid-cols-1">
                <div class="w-3000 border-gray-200 rounded-lg shadow-lg">
    
                    <div class="flex flex-col items-left justify-left p-10">
                        <h2 class="text-lg font-medium">How NASA Reinvented The Wheel</h2>
                        <p class="font-medium text-grey-100">Article</p>
                        <p class="text-black">Tags: Engineering, Materials
                    </p></div>

                    <div class="flex flex-col items-left justify-left p-10">
                        <h2 class="text-lg font-medium">MEGA Drive — the Tech That Promises Near Light-Speed Travel!</h2>
                        <p class="font-medium text-grey-100">Article</p>
                        <p class="text-black">Tags: Theoretical Physics, Interstellar Travel, Faster-Than-Light
                    </p></div>

                </div>
    
            </div>
    
        </div>
      </div>
    </div>

</div>


  )
}

export default Profile