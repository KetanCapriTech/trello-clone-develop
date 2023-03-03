/* eslint-disable prettier/prettier */
/* eslint-disable no-debugger */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function ChangePassword() {
  const [email, setEmail] = useState('');
  const [password, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // debugger;
      const response = await fetch('http://localhost:5000/api/users/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, newPassword })
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem(data.message, data.token);
        localStorage.setItem('hhjklmno-hjsohjso-toKeN', 'login success');
        router.push('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container p-12">
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Old Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default ChangePassword;
