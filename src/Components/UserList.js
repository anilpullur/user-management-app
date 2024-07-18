import React from 'react';

const UserList = ({ users, deleteUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.role}</td>
            <td><button onClick={() => deleteUser(index)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
