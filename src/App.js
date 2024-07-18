import React, { useState, useEffect } from 'react';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const addUser = newUser => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const deleteUser = index => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div className="App">
      <h2>User Management</h2>
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
