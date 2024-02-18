import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

function Table() {
  const[course,setcourse]=useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getdata=()=>{
try{
  axios
  .get("https://hubmainback.hubit.com.np/courses")
  .then((res)=>{
    console.log(res);
    setcourse([...res.data.data]);
  })
  .catch((err)=>{
    console.log(err);
  });
}catch(err){
  console.log(err);
}
  };
  useEffect(()=>{
    getdata();
  },[]);
 
  return (
   <table>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Title</th>
        <th>Duration</th>
        <th>Instructor</th>
        <th>Course Category</th>
        <th>Action</th>


      </tr>
    </thead>
    <tbody>
      {
        course.map((val,i)=>{
          return(
            <tr className={`${(i%2)!==0?'bg-gray-200':''}`}>
            <td className='px-3 py-3'>{i+1}</td>
           <td className='px-3 py-3'>
          <Link state={{title:val.title}} to={{
            pathname:`/${val.id}`,
            search:val.title
          }}>
          {val?.title}
          </Link>
            
            </td>
           <td className='px-3 py-3'>
            
            {val?.duration}
            
            </td>

           <td className='px-3 py-3'>
            <ol type='1'>
            {val.instructor.map((item,ind)=>{
             return(
               <li>{item.name}</li>
             )

})}
            </ol>
           </td>

           <td className='px-3 py-3'>{val?.category.name}</td>
           <td className='px-3 py-3'>
             <div className='flex gap-4'>
               <button className='text-white capitalize bg-blue-500 px-6 py-2 rounded-full text-sm'>edit</button>
               <button onClick={handleClickOpen} className='text-white capitalize bg-red-500 px-6 py-2 rounded-full text-sm'>delete</button>
               <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure ..you wanna delete...noooooooooo..stop.....ittttttt..plzzzzzzzz 😭"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running. */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

             </div>
           </td>
         </tr>
       )
        })
      }
    </tbody>
   </table>
  )
}

export default Table