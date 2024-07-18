import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({ email: '', name: '', role: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addUser(user);
    setUser({ email: '', name: '', role: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder='Enter Email' value={user.email} onChange={handleChange} required />
      <input type="text" name="name" placeholder='Enter Name' value={user.name} onChange={handleChange} required />
      <input type="text" name="role" placeholder='Enter Role' value={user.role} onChange={handleChange} required />
      <input type="password" name="password" placeholder='Enter Password' value={user.password} onChange={handleChange} required />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
