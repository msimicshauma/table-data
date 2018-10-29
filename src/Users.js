import React from 'react';

const Users = ({ users }) => {
  console.log(users);
  const fetchedUsers = users.map(user => {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
        <td><button>Details</button></td>
      </tr>
    );
  });

  return(
    <table>
      <tbody>
        { fetchedUsers }
      </tbody>
    </table>
  );
}

export default Users;
