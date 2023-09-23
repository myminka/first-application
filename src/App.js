import {useEffect, useState} from 'react';
import UserRow from './UserRow';
import ControlPanel from './ControlPanel';

function App(props){
  //создаем стейт, значение которого будет пустой массив элементов
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setUsers(data)
    })
  };

  // этот hook будет выполнятся каждый раз, когда у нас будет загружатся элемент App
  useEffect(() => {
    fetchUserData()
  }, []);

  return (
  <div>
    <ControlPanel />
    <UserRow data={users} />
  </div>
  );
}

export default App;