
import React, { useEffect, useState } from 'react';
import Search from './Search';
import User from './User';
import Logout from './Logout';
import { Link } from 'react-router-dom';

function Left() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          'http://localhost:3004/user/profile',
          {
            method: 'GET',
            credentials: 'include',
          }
        );

        const data = await response.json();

        if (response.ok) {
          setLoggedUser(data.user);
        }
      } catch (error) {
        console.log('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex flex-col w-[30%] h-screen bg-black text-white">
      {loggedUser && (
        <div className="flex items-center gap-3 p-4 border-b border-gray-700">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                alt="Profile"
              />
            </div>
          </div>

          <div>
            <h2 className="font-bold">{loggedUser.fullname}</h2>
            <p className="text-sm text-green-400">Logged in</p>
          </div>
        </div>
      )}

      <Search onSearchChange={setSearch} />

      <div className="flex-1 min-h-0">
        <User search={search} />
      </div>

      <Link to="/signup" className="mt-auto p-3 shrink-0">
        <Logout />
      </Link>
    </div>
  );
}

export default Left;
