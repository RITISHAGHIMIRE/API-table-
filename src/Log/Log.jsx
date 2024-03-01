import React from "react";
import { MdOutlineFingerprint } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import {Formik,Form,Field} from 'formik'
import axios from '../Hoc/Axios'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
function Log() {
  const onChange= ()=>{};
 const navigation=useNavigate();  

  const postregister = (values) => {
    try {
      axios
        .post("/admin/login",values)
        .then((res) => {
          console.log(res);
          toast.success('login successfull')
          localStorage.setItem('token',res.data.accesstoken)
          navigation('/')
          // setcourse([...res.data.data]);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message)
        });
    } catch (err) {
      toast.error('something went wrong please contact coder chasmiss and vomit dai kisan')
      

      console.log(err);
    }
  };
  return (
    
    <div className="grid grid-cols-2 h-screen  fixed w-screen top-0 left-0  ">
        <Toaster />
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
       <Formik
       initialValues={{
        username:'',
        password:''
       }}

       onSubmit={(values)=>{
        postregister(values)
       }}

       >
        {({handleSubmit})=>{
          return<Form onSubmit={handleSubmit}>
             <div className=" border-2 rounded-lg py-10 bg-white w-[350px] h-[500px]">
          <div className="text-2xl font-bold ">Hello Itians</div>
          <div className="text-xm font-normal">Welcome back</div>

          <div className="flex flex-col justify-center mt-10 gap-5 px-10 ">
            <div className="flex  border-2 gap-2 p-1 items-center rounded-lg">
            <MdOutlineFingerprint className="h-10 " />
            <Field
            name='username'
              type="text"
              placeholder="Username"
              className="h-10     w-[250px]"
            />
            </div>
          <div className="flex  border-2 gap-2 items-center p-1 rounded-lg">
          <FaLock className="h-10" />
          <Field
          name='password'
              type="text"
              placeholder="Password"
              className="h-10 w-[250px]"
            />
          </div>
           
          </div>
          <div className="flex justify-center mt-10
          ">
          <ReCAPTCHA
    sitekey="6LfA_ngpAAAAANG7_7yRfw7J7WP92jinVYIHSQQm"
    // onChange={onChange}
  />
          </div>
    
          <button type="submit" className="border-2 rounded-xl mt-10 h-[40px] w-[180px] bg-blue-500 text-white font-bold ">
            Login
          </button>
        </div>
          </Form>
        }}
       </Formik>
      </div>
    </div>
  );
}

export default Log;
