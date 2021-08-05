import React from 'react';
import { useState } from 'react'

function App() {

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
  }

  return (
    <div>

      {/* header section */}
      <div className='flex justify-center items-end space-x-2'>
        <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
        <span className='text-gray-400 italic my-2 text-xl'>by ...</span>
      </div>

      {/* todo section */}
      <div className='mx-auto max-w-4xl'>

        {/* task input and add button */}
        <div className='flex space-x-1'>
          <input className='border border-gray-400 w-full text-2xl'
            onKeyDown={onKeyDownCallback} ></input>
          <button className='border border-gray-400 w-8 font-bold'>+</button>
        </div>

        {/* tasks section */}
        <div>
          {/* task example */}
          {/* Please convert this into a task component */}
          <div
            className="flex justify-between h-8 items-center py-6 border-b"
          >
            <span className="text-2xl"> I am a task </span>
            <div className="flex space-x-1 items-center">
              <button className="bg-green-400 w-24 text-2xl" >Done</button>
              <button className="bg-red-400 w-24 text-2xl" >Delete</button>
            </div>
          </div>

          {/* another task example */}
          <div
            className="flex justify-between h-8 items-center py-6 border-b"
          >
            <span className="text-2xl"> I am another task </span>
            <div className="flex space-x-1 items-center">
              <button className="bg-green-400 w-24 text-2xl" >Done</button>
              <button className="bg-red-400 w-24 text-2xl" >Delete</button>
            </div>
          </div>

        </div>
      </div>

      {/* footer section */}
      <p className='text-center text-gray-400'> ... </p>
    </div>
  );
}

export default App;
