import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ChangeCourse = () => {
    const { id } = useParams();
    const [request, setRequest] = useState("");
    const [request2, setRequest2] = useState("")

    const updateCourseNameAndInfo = async (id, newName, newInfo) => {
        const courseId = id

        try {
            await axios.put('http://localhost:5000/changeCourseNameAndInfo', 
                {
                    "id": courseId,
                    "newName": newName,
                    "newInfo": newInfo
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

    const updateClick = e => {
        updateCourseNameAndInfo(id, request, request2)
    }

    return (
        <div>
            <form>
                <label>Нова назва курсу:</label>
                <input type="text" onChange={handleRequestChange}/>
                <label>Новий опис курсу</label>
                <input type="text" onChange={handleRequestChange2} />
                <button onClick={updateClick}>Оновити</button>
            </form>
        </div>
    )
}

export default ChangeCourse