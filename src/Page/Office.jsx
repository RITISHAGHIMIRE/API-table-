import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Input } from "@mui/material";

function Office() {
  const location = useParams();
  const par = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  const [course, setcourse] = useState([]);
  const [Show, setShow] = useState('info')
  const getdata = (id) => {
    try {
      axios
        .get(`https://hubmainback.hubit.com.np/courses/${id}`)
        .then((res) => {
          console.log(res);
          setcourse([res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (location && location.id) {
      getdata(location.id);
    }
  }, [location]);
  console.log(par,searchParams);
  return (
    
    <>
    <div className="capitalize font-semibold text-xl">
      {`home > ${par.state.title}`}
    </div>
      <div className="w-full border grid grid-cols-2 mb-10">
        <button
          className={`border py-3 transition-all ease-in-out duration-700 delay-150 ${Show==='info'?"bg-white text-black":"bg-gray-300"} `}
          onClick={() => {
            setShow("info");
          }}
        >
         Course info
        </button>
        <button
                    className={`border py-3 transition-all ease-in-out duration-700 delay-150 ${Show!=='info'?"bg-white text-black":"bg-gray-300"} `}

          onClick={() => {
            setShow("syallabus");
          }}
        >
          Syllabus
        </button>
      </div>
      <div className="grid gap-5">
{Show=="info"?(
<div>
{course.map((val, i) => {
  let image = `https://hubmainback.hubit.com.np/public/${val.image}`;
  return (
    <div className="grid grid-cols-2 gap-10 w-full">
    
      <div>
        
        
        <div className="  relative border  p-10 shadow-lg ">
          <img
            src={image}
            alt=""
            className="h-52 w-100 rounded-xl object-cover"
          />
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            <div className="flex  flex-col justify-start items-start">
              Course title
              <div className="text-xm font-semibold uppercase  ">
                {val.title}
              </div>
            </div>
            <div className="flex  flex-col justify-start items-start">
              <div> Course duration</div>
              <div className="text-xm font-semibold uppercase">
                {val.duration}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            <div className="flex  flex-col justify-start items-start">
              Instructor
              <div className="text-xm font-semibold capitalize px-2 ">
                <ol className="list-disc">
                  {val.instructor.map((item, ind) => {
                    return <li>{item.name}</li>;
                  })}
                </ol>
              </div>
            </div>
            <div className="flex  flex-col justify-start items-start">
              <div> Students</div>
              <div className="text-xm font-semibold uppercase">0</div>
            </div>
          </div>
          <div className="flex justify-start flex-col mt-5 font-semibold w-16 ">
            <div>Review</div>
            <div>0</div>
          </div>
        </div>
      </div>
      <div className=" w-full  shadow-lg pt-4  ">
        <div className="flex justify-start mx-3 text-left text-xl font-bold ">
          About this course
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: val.description }}
          className="mx-3 mt-3 break-all whitespace-break-spaces text-left"
        />
      </div>
    </div>
  );
})}

</div>
):(
<div className="grid gap-4">
  {
    course.map((val,i)=>{
     return val.syllabus.map((item,ind)=>{
        return(
          <Accordion  key={i} >
        <AccordionSummary
        autoFocus={true}
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="py-4 font-semibold text-xm text-bold">{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <div className="px-6">
          <div dangerouslySetInnerHTML={{__html:item.description}} className="list-disc" />
         </div>
        </AccordionDetails>
      </Accordion>
        )
      })
    })
  }
</div>
)}
        {/* {course.map((val, i) => {
          let image = `https://hubmainback.hubit.com.np/public/${val.image}`;
          return (
            <div className="grid grid-cols-2 w-full">
            
              <div>
                
                
                <div className=" p-2 relative border  shadow-lg ">
                  <img
                    src={image}
                    alt=""
                    className="h-52 w-100 rounded-xl object-cover"
                  />
                  <div className="grid grid-cols-2 gap-4 mt-8 ">
                    <div className="flex  flex-col justify-start items-start">
                      Course title
                      <div className="text-xm font-semibold uppercase  ">
                        {val.title}
                      </div>
                    </div>
                    <div className="flex  flex-col justify-start items-start">
                      <div> Course duration</div>
                      <div className="text-xm font-semibold uppercase">
                        {val.duration}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8 ">
                    <div className="flex  flex-col justify-start items-start">
                      Instructor
                      <div className="text-xm font-semibold capitalize px-2 ">
                        <ol className="list-disc">
                          {val.instructor.map((item, ind) => {
                            return <li>{item.name}</li>;
                          })}
                        </ol>
                      </div>
                    </div>
                    <div className="flex  flex-col justify-start items-start">
                      <div> Students</div>
                      <div className="text-xm font-semibold uppercase">0</div>
                    </div>
                  </div>
                  <div className="flex justify-start flex-col mt-5 font-semibold w-16 ">
                    <div>Review</div>
                    <div>0</div>
                  </div>
                </div>
              </div>
              <div className=" w-full  shadow-lg  ">
                <div className="flex justify-start mx-6 text-left text-xl font-bold mt-28">
                  About this course
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: val.description }}
                  className="mx-3 text-left"
                />
              </div>
            </div>
          );
        })} */}

        {/* {course && course.length>0 && course[0].description} */}
      </div>
    </>
  );
}

export default Office;
