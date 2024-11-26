import axios from "axios";
import { useState } from "react";

const CreateCourse = () => {
    const [request, setRequest] = useState("");
    const [request2, setRequest2] = useState("")

    const createCourse = async (courseName, courseInfo) => {
        try {
            await axios.post("http://localhost:5000/createCourse", {
                _id: Math.random(100),
                CourseName: courseName,
                CourseInfo: courseInfo
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleRequestChange = e => {
        setRequest(e.currentTarget.value)
      }

    const handleRequestChange2 = e => {
        setRequest2(e.currentTarget.value)
      }

    return (
        <form>
            <label>
                Назва курсу
            </label>
            <input type="text" onChange={handleRequestChange}/>
            <label>
                Інформація про курс
            </label>
            <input type="text" onChange={handleRequestChange2}/>
            <button onClick={() => createCourse(request, request2)}>Створити</button>
        </form>
    )
}

export default CreateCourse