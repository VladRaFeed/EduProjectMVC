// import axios from "axios";
// import { useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import MainView from "./pages/Main/MainView";
import CourseView from "./pages/Course/CourseView";
import MarksView from "./pages/MarksList/MarksList";
import ChangeCourse from "./pages/Course/ChangeCourse"
import CreateCourse from "./pages/Course/CreateCourse";

export const App = () => {

  // const [usersData, setUsersData] = useState([])

  // useEffect(() =>{
  //   getUsers()
  // }, [])

  // const getUsers = async () => {
  //   try {
  //     const {data} = await axios.get('http://localhost:5000/getUsers')
  //     setUsersData(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainView/>} />
          <Route path="courses" element={<CourseView/>}>
            <Route path="changeCourse/:id" element={<ChangeCourse/>}/>
            <Route path="createCourse" element={<CreateCourse />} />
          </Route>
          <Route path="/marks" element={<MarksView/>} />
        </Route>
      </Routes>
    </div>
  );
};
