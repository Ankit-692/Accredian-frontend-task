import second from '../images/second.png'
import { useState } from "react";
import Form from "./Form";

function Lower(){
    let [model,setModel] = useState(false)

    return(
        <>
        <div className='mt-40 w-full h-full mb-40 relative'>
            <img src={second}></img>
            <button onClick={()=>setModel(true)} className="bg-second-2 px-5 rounded-lg text-white shadow-[0_4px_25px_5px_rgba(0,0,0,0.25)] text-3xl p-3 mt-10 absolute m-auto left-0 right-0 bottom-5 w-max rw:text-sm rw:bottom-[-50px]">
            Refer Now
            </button>  
        </div>
        {model && <Form onClose={()=>setModel(false)}/>}
        <div className='bg-third flex flex-row justify-around pt-10 pb-10 text-white rw:text-sm'>
             <span className='text-left leading-10'>
                <h3 className='text-xl underline'>PROGRAMS</h3>
                <a href=''>+ Data Science</a><br/>
                <a href=''>+ AI with Python</a><br/>
                <a href=''>+ Product Management</a><br/>
                <a href=''>+ Agile Methodology</a><br/>
                <a href=''>+ Software Management</a><br/>
                <a href=''>+ Business Management</a><br/>
             </span>
             <span className='text-left leading-10'>
                <a href=''>About Us</a><br/>
                <a href=''>Career</a><br/>
                <a href=''>Blog</a><br/>
                <a href=''>Privacy Policy</a><br/>
                <a href=''>Terms of Serivce</a><br/>
                <a href=''>Refferal Policy</a><br/>
             </span>
        </div>
        </>
    )
}

export default Lower