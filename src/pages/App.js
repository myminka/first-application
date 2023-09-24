import {useEffect, useState} from 'react';
import getUsers from '../utils/api/requestsToServer';
import UserRow from '../components/UserRow';
import Header from '../components/HeaderClass';
import HeaderFunction from '../components/HeaderFunction'

function App(){
  //создаем стейт, значение которого будет пустой массив элементов
  const [users, setUsers] = useState([]);

  // этот hook будет выполняться только один раз, когда у нас будет загружатся элемент App
  useEffect(() => {
    getUsers()
    .then(users => {
      setUsers(users);
    });
  }, []);

  return <>
      <Header color='red'/>
      <HeaderFunction/>
      <UserRow data={users}/>
    </>;
}

export default App;