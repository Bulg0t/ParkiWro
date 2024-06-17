import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Menu from './Menu';
import Footer from './Footer';

function Ranking() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/api/users/ranking', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error('Błąd podczas pobierania danych', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Fragment>
    <div>
      <Menu />
      <div className="container">
      <br/>
        <h1 className="my-4"><br/><br/>Ranking Użytkowników</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Miejsce</th>
              <th>Nazwa Uzytkownika</th>
              <th>Liczba Odznak</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.badgeCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
    </Fragment>
  );
}


export default Ranking;
