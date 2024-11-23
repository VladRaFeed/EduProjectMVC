import axios from "axios";
import { useEffect, useState } from "react";

export const App = () => {

  const [usersData, setUsersData] = useState([])

  useEffect(() =>{
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const {data} = await axios.get('http://localhost:5000/getUsers')
      console.log({data})
      setUsersData(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h2>MVC React-Node-Mongo temlptate </h2>
      <ul>
        {usersData.map(({_id, name, age}) => (
          <li key={_id}>
            <h1>Name of user: {name}</h1>
            <p>Age of user: {age}</p>
          </li>
        )
        )}
      </ul>
    </div>
  );
};
