import React from "react";
import { MdOutlineFingerprint } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
function Log() {
  const onChange= ()=>{};
  return (
    <div className="grid grid-cols-2 h-screen  fixed w-screen top-0 left-0  ">
      <div className="bg-purple-900 w-full relative flex overflow-hidden  flex-col gap-2 justify-center items-start px-40">
        <div className="h-72 absolute -top-24 right-24 w-72  bg-transparent border-ds  border-4 rounded-full">
          
        </div>
        <div className="h-80 absolute -top-20  -right-10 w-80  bg-transparent border-ds  border-4 rounded-full">
          
          </div>
          <div className="h-72 absolute -bottom-24 left-32 w-72  bg-transparent border-ds  border-4 rounded-full">
          
          </div>
          <div className="h-80 absolute -bottom-20 -left-10 w-80  bg-transparent border-ds  border-4 rounded-full">
            
            </div>
        <div className="text-3xl font-bold flex justify-start text-white">HUB IT</div>
        <div className="text-xm font-normal text-white">TRAINING AND SOLUTION (Computer Institute)</div>
        <button className="border-2 rounded-lg h-[40px] bg-white fot-bold mt-2 text-blue-500 w-[100px]">Read more</button>
      </div>
      <div className="flex flex-col  items-center border-2 w-100 bg-gray-200 justify-center">
        <div className=" border-2 rounded-lg py-10 bg-white w-[350px] h-[500px]">
          <div className="text-2xl font-bold ">Hello Itians</div>
          <div className="text-xm font-normal">Welcome back</div>

          <div className="flex flex-col justify-center mt-10 gap-5 px-10 ">
            <div className="flex  border-2 gap-2 p-1 items-center rounded-lg">
            <MdOutlineFingerprint className="h-10 " />
            <input
              type="text"
              placeholder="Username"
              className="h-10     w-[250px]"
            ></input>
            </div>
          <div className="flex  border-2 gap-2 items-center p-1 rounded-lg">
          <FaLock className="h-10" />
          <input
              type="text"
              placeholder="Password"
              className="h-10 w-[250px]"
            ></input>
          </div>
           
          </div>
          <div className="flex justify-center mt-10
          ">
          <ReCAPTCHA
    sitekey="6LfA_ngpAAAAANG7_7yRfw7J7WP92jinVYIHSQQm"
    // onChange={onChange}
  />
          </div>
    
          <button className="border-2 rounded-xl mt-10 h-[40px] w-[180px] bg-blue-500 text-white font-bold ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Log;
