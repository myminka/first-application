import {useEffect, useState} from 'react'
import PassMessage from './PassMessage';

function App(props){
  const isPass = props.isPass;

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

  return <PassMessage data={users}/>;
}

export default App;