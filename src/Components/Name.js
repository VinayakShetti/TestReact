import React, { useState } from 'react'

const Name = () => {
const [name , setName] = useState ("");
const [yourname , setYourName] = useState("");
function myName(){
    setName(" Shri");
    
};

function yourName(){
    setYourName("Vinayak");
    
};
return (
    <>
    <div className="p-4 m-4 text-red-600 flex justify-center font-bold text-3xl">  
  <h1>My Name is : {name}</h1>
</div>
<div className="p-4 m-4 text-red-600 flex justify-center font-bold text-3xl">  
  <h1>your Name is  : {yourname}</h1>
</div>

<div className="flex justify-center">
      <button  onClick  = {myName} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
        i Am 
      </button>
    </div>
    <div className="flex justify-center">
      <button  onClick  = {yourName} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
       Your Name
      </button>
    </div>


    </>
  )
}

export default Name