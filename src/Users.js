import React from 'react';

const Users = ({ users, toggleDetails }) => {
  console.log(users);

  let detailsClass = 'details';

  const fetchedUsers = users.map(user => {
    if(!user.hidden) detailsClass += ' show';
    else detailsClass = 'details';

    return (
      <tbody key={user.id}>
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
          <td><button onClick={() => toggleDetails(user.id)}>Details</button></td>
        </tr>

        <tr className={detailsClass + ' default'}>
          <td>Company name</td>
          <td>User website</td>
          <td>Street</td>
          <td>City</td>
        </tr>

        <tr className={detailsClass}>
          <td>{user.company.name}</td>
          <td>{user.website}</td>
          <td>{user.address.street}</td>
          <td>{user.address.city}</td>
        </tr>
      </tbody>
    );
  });

  return(
    <table>
      <tbody>
        <tr className="default">
          <td>Name</td>
          <td>Email</td>
          <td>Username</td>
          <td>Show details</td>
        </tr>
      </tbody>
      { fetchedUsers }
    </table>
  );
}

export default Users;
