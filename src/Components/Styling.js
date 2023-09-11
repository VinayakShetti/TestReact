import React,{useState} from 'react';

const Styling = () => {

    const state= useState();
    const [count, setCount]=useState(0)
    const [name,setName]=useState(0)
    const  IncNum = () => {
        setCount (count+1);
    }
    const myName =() => {
        "Vinayak"
    }

  return (
    <>
    <div className='items-center m1-40'>
        <h1>{count}</h1>
    </div>

    <div className='items-center m1-40'>
        <h1>{count}</h1>
    </div>

    <div className='flex items-center m1-4'>
        <button 
        onClick={IncNum}
        className='bg-green-700 p-3 rounded-x1 text-wh1' > Click Me</button>

    <button 
        onClick={myName}
        className='bg-green-700 p-3 rounded-x1 text-wh1' > My name</button>
    </div>

    </>
  )
}
export default Styling;
