
import React, { useEffect, useState } from 'react';
import Users from './users';

function User({ search = '' }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'http://localhost:3004/user/users',
          {
            method: 'GET',
            credentials: 'include',
          }
        );

        const data = await response.json();

        if (response.ok) {
          setUsers(data.users);
        } else {
          console.log(data.error || data.message);
        }
      } catch (error) {
        console.log('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((person) => {
    const searchText = search.toLowerCase().trim();

    return (
      person.fullname?.toLowerCase().includes(searchText) ||
      person.email?.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="mt-3">
      <h1 className="px-2 py-3 text-white bg-slate-700 font-semibold rounded-lg">
        Message
      </h1>

      <div
        className="overflow-y-auto hide-scroll"
        style={{
          maxHeight: 'calc(84vh - 10vh)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {filteredUsers.length > 0 ? (
          filteredUsers.map((person) => (
            <Users
              key={person._id}
              name={person.fullname}
              email={person.email}
            />
          ))
        ) : (
          <p className="text-white p-3">No users found</p>
        )}
      </div>
    </div>
  );
}

export default User;
