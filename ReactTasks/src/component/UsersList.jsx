import React, { useEffect, useState } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div style={styles.container}>
      <h2>👤 User List</h2>
      <ul style={styles.list}>
        {users.map((user) => (
          <li key={user.id} style={styles.item}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Simple styling
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '500px',
    margin: 'auto',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
  },
};

export default UsersList;
