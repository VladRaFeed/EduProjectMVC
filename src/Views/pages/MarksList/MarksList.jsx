import React, { useState, useEffect } from 'react';
import styles from './MarksList.module.css';
import axios from 'axios';

const MarksView = () => {
    const [marksLists, setMarksLists] = useState([]);
    const [selectedMarksList, setSelectedMarksList] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [newMarksList, setNewMarksList] = useState({
        GroupName: '',
        Teacher: '',
        StudentsList: [],
        SubjectsList: [],
        Marks: [],
    });

    useEffect(() => {
        axios.get('http://localhost:5000/getMarksLists')
            .then(response => setMarksLists(response.data))
            .catch(err => console.log(err));
    }, []);

    const handleSelectMarksList = (marksList) => {
        setSelectedMarksList(marksList);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/searchMarksList/${searchQuery}`);
            setMarksLists(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteMarksList = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/deleteMarksList/${id}`);
            setMarksLists(marksLists.filter(item => item._id !== id));
        } catch (err) {
            console.error('Помилка при видаленні журналу:', err);
        }
    };

    const handleCreateMarksList = async () => {
        try {
            const response = await axios.post('http://localhost:5000/createMarksList', newMarksList);
            setMarksLists([...marksLists, response.data]);
            setNewMarksList({
                GroupName: '',
                Teacher: '',
                StudentsList: [],
                SubjectsList: [],
                Marks: [],
            });
        } catch (err) {
            console.error('Помилка при створенні журналу:', err);
        }
    };

    const handleUpdateMarksList = async (id, updatedData) => {
        try {
            const response = await axios.put(`http://localhost:5000/updateMarksList/${id}`, updatedData);
            setMarksLists(marksLists.map(item => item._id === id ? response.data : item));
        } catch (err) {
            console.error('Помилка при оновленні журналу:', err);
        }
    };

    return (
        <div className={styles.marksListContainer}>
            <h2>Список журналів</h2>
            <div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Пошук за групою..."
                    className={styles.searchInput}
                />
                <button onClick={handleSearch} className={styles.searchButton}>Пошук</button>
            </div>
            <div className={styles.createForm}>
                <h3>Створити новий журнал</h3>
                <input
                    type="text"
                    placeholder="Назва групи"
                    value={newMarksList.GroupName}
                    onChange={(e) => setNewMarksList({ ...newMarksList, GroupName: e.target.value })}
                    className={styles.createInput}
                />
                <input
                    type="text"
                    placeholder="Викладач"
                    value={newMarksList.Teacher}
                    onChange={(e) => setNewMarksList({ ...newMarksList, Teacher: e.target.value })}
                    className={styles.createInput}
                />
                <button onClick={handleCreateMarksList} className={styles.createButton}>Додати журнал</button>
            </div>
            {selectedMarksList ? (
                <div className={styles.groupCard}>
                    <button className={styles.backButton} onClick={() => setSelectedMarksList(null)}>← Назад</button>
                    <h2>Група: {selectedMarksList.GroupName}</h2>
                    <p className={styles.teacher}>Викладач: {selectedMarksList.Teacher}</p>
                    <div>
                        {selectedMarksList.StudentsList.map((student, index) => (
                            <div key={index} className={styles.studentCard}>
                                <h4>Студент: {student}</h4>
                                {selectedMarksList.SubjectsList.map((subject, subIndex) => (
                                    <div key={subIndex} className={styles.subjectCard}>
                                        <h5>Предмет: {subject}</h5>
                                        <p>Оцінки:</p>
                                        <ul>
                                            {selectedMarksList.Marks[index] &&
                                                selectedMarksList.Marks[index][subIndex] &&
                                                selectedMarksList.Marks[index][subIndex].map((mark, markIndex) => (
                                                    <li key={markIndex}>Лаб {markIndex + 1}: {mark}</li>
                                                ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <button onClick={() => handleUpdateMarksList(selectedMarksList._id, selectedMarksList)} className={styles.updateButton}>
                        Оновити журнал
                    </button>
                    <button onClick={() => handleDeleteMarksList(selectedMarksList._id)} className={styles.deleteButton}>
                        Видалити журнал
                    </button>
                </div>
            ) : (
                <div>
                    {marksLists.map((marksList) => (
                        <div
                            key={marksList._id}
                            className={styles.groupCard}
                            onClick={() => handleSelectMarksList(marksList)}
                        >
                            <h2>Група: {marksList.GroupName}</h2>
                            <p>Викладач: {marksList.Teacher}</p>
                            <button onClick={() => handleDeleteMarksList(marksList._id)} className={styles.deleteButton}>Видалити</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MarksView;
