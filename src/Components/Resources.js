import React from 'react'

const Resources = () => {
  return (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl space-y-8">
        <div>
          <h2 class="mt-8 text-center text-4xl font-extrabold text-gray-900">Find All Your Information Here.</h2>
        </div>
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 text-center">
          <div class="rounded-lg">
            <label for="search-entry" class="sr-only ">Search Keywords</label>
            <input id="search-entry" name="search" type="search" required class="w-150 appearance-none rounded-none w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Keywords"/>
          </div>
          <div class="rounded-lg">
            <button type="enter" class="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-5">Enter</button>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div class="w-full border border-gray-200 rounded-lg shadow-lg">
                    <div class="flex flex-col items-center justify-center p-10">
                        <h2 class="text-lg font-medium text-center">What is space exploration?</h2>
                        <p class="font-medium text-blue-700">Video</p>
                        <p class="text-black">Person 1</p>
                        <img src={("./").default} />
                        <img src = "../Space Exploration.jpg"></img>
                    </div>
                </div>
                <div class="w-full border border-gray-200 rounded-lg shadow-lg">
                    <div class="flex flex-col items-center justify-center p-10">
                        <h2 class="text-lg font-medium text-center">What is space exploration?</h2>
                        <p class="font-medium text-blue-700">Video</p>
                        <p class="text-black">Person 1</p>
                        <img src={("./").default} />
                        <img src = "../Space Exploration.jpg"></img>
                    </div>
                </div>
                <div class="w-full border border-gray-200 rounded-lg shadow-lg">
                    <div class="flex flex-col items-center justify-center p-10">
                        <h2 class="text-lg font-medium text-center">What is space exploration?</h2>
                        <p class="font-medium text-blue-700">Video</p>
                        <p class="text-black">Person 1</p>
                        <img src={("./").default} />
                        <img src = "../Space Exploration.jpg"></img>
                    </div>
                </div>
                <div class="w-full border border-gray-200 rounded-lg shadow-lg">
                    <div class="flex flex-col items-center justify-center p-10">
                        <h2 class="text-lg font-medium text-center">What is space exploration?</h2>
                        <p class="font-medium text-blue-700">Video</p>
                        <p class="text-black">Person 1</p>
                        <img src={("./").default} />
                        <img src = "../Space Exploration.jpg"></img>
                    </div>
                </div>
                <div class="w-full border border-gray-200 rounded-lg shadow-lg">
                    <div class="flex flex-col items-center justify-center p-10">
                        <h2 class="text-lg font-medium text-center">What is space exploration?</h2>
                        <p class="font-medium text-blue-700">Video</p>
                        <p class="text-black">Person 1</p>
                        <img src={("./").default} />
                        <img src = "../Space Exploration.jpg"></img>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Resources