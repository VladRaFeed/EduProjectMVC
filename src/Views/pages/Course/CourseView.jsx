import axios from "axios";
import { useEffect, useState, Suspense} from "react";
import {Link, Outlet} from "react-router-dom"
import css from "./CourseView.module.css"
import Notiflix from 'notiflix';

const CourseView = () => {
    
    const [coursesData, setCoursesData] = useState([])
    const [request, setRequest] = useState("");

    useEffect(() => {
        getCourses()
    }, [])

    const getCourses = async () => {
        try {
            const {data} = await axios.get('http://localhost:5000/getCourses')
            setCoursesData(data)
        } catch (error) {
            console.log(error)
        }
    }

    const searchCourse = async (request) => {
        const req = request
        try {
            const {data} = await axios.get(`http://localhost:5000/searchCourse/${req}`)
            console.log(data.data)
            setCoursesData([data.data])
        } catch (error) {
            console.log(error)
        }
    }

    const deleteCourse = async (courseId) => {
        const id = courseId
        try {
            await axios.delete(`http://localhost:5000/deleteCourse/${id}`)
            Notiflix.Notify.success("Курс успішно видалено!")
            getCourses()
        } catch (error) {
            console.log(error)
        }
    }

    const handleRequestChange = e => {
        setRequest(e.currentTarget.value)
      }

      const handleSubmit = async e => {
        e.preventDefault();
    
        e.target[0].value = "";
    
        if (request.trim() === "") {
          return Notiflix.Notify.failure('Вибчате, курсів з вказаною назвою не знайдено. Будь ласка, спробуте ще раз')
        }
        
        // await searchCourse(request);
        const data = await searchCourse(request);
        console.log(data)
      }

    return(
        <section>
            <Link to="createCourse">Створити курс</Link>
                <Suspense
                    fallback={
                    <div>
                        <h1>Loading...</h1>
                    </div>
                    }
                >
                    <Outlet />
                </Suspense>
            <h1 className={css.courseTitle}>Список курсів</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Пошук курсів" onChange={handleRequestChange}/>
                <button type="submit">&#8594;</button>
            </form>
            <ul className={css.couseList}>
                {coursesData.map(({_id, CourseName, CourseInfo, StudentsList, TasksList, AdvertisimentList}) => (
                    <li key={_id} className={css.courseItem}>
                        <div className={css.courseTopLine}></div>
                        <button onClick={() => deleteCourse(_id)}>Видалити</button>
                        <Link to={`changeCourse/${_id}`}>Змінити курс</Link>
                        <div className={css.courseTitleBox}>
                            <h2 className={css.courseName}>{CourseName}</h2>
                            <p className={css.courseInfo}>{CourseInfo}</p>
                        </div>
                        <div>
                            <h2>Список студентів:</h2>
                            <ul className={css.studentsList}>
                                {StudentsList.map(({id, student}) => (
                                    <li key={id}>
                                        <p className={css.student}>{student}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h2>Завдання:</h2>
                                {TasksList.map(({id, taskName, taskInfo}) => (
                                    <li key={id}>
                                        <h3 className={css.taskName}>{taskName}</h3>
                                        <p>{taskInfo}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h2>Оголошення:</h2>
                                {AdvertisimentList.map(({id, advertInfo}) => (
                                    <li key={id}>
                                        <p>{advertInfo}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default CourseView