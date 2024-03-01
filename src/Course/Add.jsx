import axios from "../Hoc/Axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ReactQuill from "react-quill";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { IoCloudUploadSharp } from "react-icons/io5";
import { Field, Form, Formik } from "formik";
import { Category } from "@mui/icons-material";
import toast, { Toaster } from "react-hot-toast";
import { data } from "autoprefixer";

function Add() {
  const inputRef = useRef(null);
  const navigation=useNavigate()
  const [image, setImage] = useState("");
  const [value, setValue] = useState("");
  const { quill, quillRef } = useQuill();

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = () => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  return (
    <div>
      <Formik
        initialValues={{
          course: "",
          duration: "",
          category: "",
          instructor: "",
          image: "",
        }}
        onSubmit={(values, { resetForm }) => {
          try {
            const formData=new FormData()
            formData.append("course",values.course)
            formData.append("duration",values.duration)
            formData.append("category",values.category)
            formData.append("instructor",values.instructor)
            formData.append("image",values.image)




            axios
            .post("/courses",formData)
            .then((res) => {
              console.log(res.data);
              // toast.success("login successful")
              // localStorage.setItem("token",res.data.accesstoken)
              navigation("/")
              // setCountries([...res.data.data]);
            })
            .catch((error) => {
              console.log(error);
           toast.error(error.response.data.message)
            });
          } catch (error) {
            console.log(error);
          }
      
          console.log(values);
          // resetForm();
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Toaster/>
              <div className="bg-gray-100 h-full w-[1200px] p-10 rounded-md ">
                <div className="text-left bg-white p-4">
                  <div className="text-pink-800 font-bold text-2xl">
                    {" "}
                    About Course
                  </div>
                  <div className="text-lg text-gray-700 pt-3 font-normal">
                    Edit the previous details.
                  </div>
                </div>

                <div className=" bg-white h-[600px]  p-4 ">
                  <div className=" gap-5 mt-10 flex justify-between">
                    <div className="text-left">
                      <div className="text-lg font-medium text-purple-700 mb-2">
                        Course name
                      </div>
                      <Field
                        name="course"
                        type="text"
                        label="hehe"
                        className="outline-none h-10 w-[250px] outline-gray-200"
                      ></Field>
                      <div></div>
                    </div>

                    <div className="text-left">
                      <div className="text-lg font-medium text-purple-700 mb-2">
                        Duration
                      </div>
                      <div>
                        <Field
                          name="duration"
                          type="text"
                          label="hehe"
                          className="outline-none h-10 w-[250px] outline-gray-200"
                        />
                      </div>
                    </div>

                    <div className="text-left">
                      <div className="text-lg font-medium text-purple-700 mb-2">
                        Select Category
                      </div>
                      <div>
                        <Field

                         
                          id="combo-box-demo"
                              name="category"
                              label="Movie"
                              className="outline-none h-10 w-[250px] outline-gray-200"
                           
                      
                        />
                      </div>
                    </div>

                    <div className="text-left">
                      <div className="text-lg font-medium text-purple-700 mb-2">
                        Instructor
                      </div>
                      <div>
                        <Field
                        type="text"
                        name="instructor"
                          id="combo-box-demo"
                        
                              label="Movie"
                              className="outline-none h-10 w-[250px] outline-gray-200"
                            />
                         
                        
                      </div>
                    </div>
                  </div>

                  <div className="gap-5 mt-10 flex justify-between">
                    <div className="text-left mt-10">
                      <div className="text-lg font-medium text-purple-700 mb-2">
                        Upload Course Image
                      </div>
                      <div onClick={handleImageClick}>
                        {/* <div className="h-44 w-44  border border-black  text-center items-center text-xl text-gray-400 ">Click to upload</div> */}
                        {values.image ? (
                          <img src={URL.createObjectURL(values.image)} alt="" />
                        ) : (
                          <div className="h-48  w-48  border border-black border-dashed flex text-xl flex-col  justify-center text-center items-center text-gray-400 ">
                            <div className="text-5xl">
                              <IoCloudUploadSharp />
                            </div>
                            <div className="">Click to upload</div>
                          </div>
                        )}
                        <input
                          type="file"
                          ref={inputRef}
                          onChange={(e) => {
                            setFieldValue("image", e.target.files[0]);
                          }}
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>

                    {/* <div className="text-left mt-10">
                      <div className="text-lg font-medium text-purple-700 mb-2">
                        Description
                      </div>
                      <div style={{ width: 850, height: 150 }}>
                        <div ref={quillRef} />
                      </div>
                    </div> */}
                  </div>

                  <div className="text-left flex gap-5">
                    <button
                    onClick={()=>{
                      navigation('/')
                    }}
                      type="button"
                      className="bg-red-600 h-10 my-14 w-24 text-lg rounded-lg text-center text-white hover:bg-red-500"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="bg-indigo-600 h-10 my-14 w-24 text-lg rounded-lg text-center text-white hover:bg-indigo-500"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Add;
