import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Select } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Table() {
  const [course, setcourse] = useState([]);
  const [search, setsearch] = useState("");
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [value, setValue] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickEdit = () => {
    setEdit(true);
  };
  const handleDelete = () => {
    setEdit(false);
  };
  const getdata = () => {
    try {
      axios
        .get("https://hubmainback.hubit.com.np/courses")
        .then((res) => {
          console.log(res);
          setcourse([...res.data.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  function filter(options) {
    return options.filter((option) => {
      return (
        option["title"].toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        option["category"]["name"].toLowerCase().indexOf(search.toLowerCase()) >
          -1
      );
    });
  }
  return (
    <div>
      <div className="  flex justify-end  text-center">
       <Link to={"/Log"}>
       <button className=" border-2 h-16 rounded-lg w-40">
          Log In 
        </button>
       </Link>
      </div>
      <div className=" mb-10 flex items-end justify-center ">
        <Link to={"/Add"}>
          <button className="text-white capitalize bg-black px-6 py-2 rounded-full text-sm">
            Add Course
          </button>
        </Link>
      </div>
      <div className="flex justify-end h-12 mb-4">
        <div className="flex  border-2 items-center gap-4 justify-end w-fit border-black ">
          <FaSearch />
          <input
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            className="outline-none  flex   border-none"
            type="text"
            placeholder="Kei search garnus mahasaye"
          ></input>
        </div>
      </div>

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
          {filter(course).map((val, i) => {
            return (
              <tr className={`${i % 2 !== 0 ? "bg-gray-200" : ""}`}>
                <td className="px-3 py-3">{i + 1}</td>
                <td className="px-3 py-3">
                  <Link
                    state={{ title: val.title }}
                    to={{
                      pathname: `/${val.id}`,
                      search: val.title,
                    }}
                  >
                    {val?.title}
                  </Link>
                </td>
                <td className="px-3 py-3">{val?.duration}</td>

                <td className="px-3 py-3">
                  <ol type="1">
                    {val.instructor.map((item, ind) => {
                      return <li>{item.name}</li>;
                    })}
                  </ol>
                </td>

                <td className="px-3 py-3">{val?.category.name}</td>
                <td className="px-3 py-3">
                  <div className="flex gap-4">
                    <div className="">
                      <button
                        onClick={handleClickEdit}
                        className="text-white capitalize bg-blue-500 px-6 py-2 rounded-full text-sm"
                      >
                        edit
                      </button>
                      <Dialog
                        open={edit}
                        onEdit={handleDelete}
                        aria-describedby="alert-dialog-slide-description"
                      >
                        <div className="px-5 py-2 ">
                          <div className="text-2xl text-purple-800 font-bold">
                            {"Edit course"}
                          </div>
                          <div className="text-xm font-normal ">
                            {
                              "Edit the previous details of course and save changes."
                            }
                          </div>
                        </div>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-slide-description">
                            <div className="flex flex-col gap-9 h-100">
                              <div className="flex gap-11">
                                <div className="flex flex-col text-blue-700 text-xl font-medium">
                                  Course title
                                  <input
                                    className="border-2 h-10 w-[260px] px-1 border-gray-400 text-black"
                                    type="text"
                                    value="Office package"
                                  ></input>
                                </div>
                                <div className="flex text-blue-700 text-xl w-fit font-medium  flex-col">
                                  Category
                                  <select
                                    className="h-10 w-[250px] border-2  border-gray-400 text-black "
                                    type="text"
                                  >
                                    <option>Office administrative</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex gap-11">
                                <div className="flex  text-blue-700  text-xl font-medium  flex-col">
                                  Instructor
                                  <input
                                    className=" border-2 w-fit h-10 px-1 border-gray-400 text-black"
                                    type="text"
                                    value="Kisan mahat "
                                  ></input>
                                </div>
                                <div className="flex text-blue-700 text-xl font-medium  flex-col">
                                  Duration
                                  <input
                                    className="border-2 w-[250px] h-10 px-1 border-gray-400 text-black"
                                    type="text"
                                    value="3 months"
                                  ></input>
                                </div>
                              </div>
                              <div>
                                <div className="flex flex-col text-blue-700 ">
                                  {" "}
                                  Student
                                  <input
                                    className="border-2 h-10 w-[260px] border-gray-400 text-black px-2"
                                    value={"0"}
                                  ></input>
                                </div>
                              </div>

                              <div className=" ">
                                <label className="text-blue-700">
                                  Description
                                </label>
                                <ReactQuill
                                  theme="snow"
                                  value={value}
                                  onChange={setValue}
                                  className="h-44 "
                                />
                              </div>
                            </div>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleDelete}>Cancel</Button>
                          <Button onClick={handleDelete}>Update</Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                    <button
                      onClick={handleClickOpen}
                      className="text-white capitalize bg-red-500 px-6 py-2 rounded-full text-sm"
                    >
                      delete
                    </button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {
                          "Are you sure ..you wanna die...noooooooooo..stop.....ittttttt..plzzzzzzzz 😭 hi myself ritisha if u wanna die just die"
                        }
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
