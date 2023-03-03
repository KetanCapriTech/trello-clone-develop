/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

function AddStudentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const bearerToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDAwOTQ1ZjcwOGU1MGZhOWVmMGMwNTgiLCJlbWFpbCI6Imtra2Z1bmRlMjJAZ21haWwuY29tIiwiaWF0IjoxNjc3Nzc3MzMwLCJleHAiOjE2NzkwNzMzMzB9.uBF1WMSXmmDlYVkDSB4Kd6N-e3nyCWRg9bOtkTzJQVw';

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/add-faculty', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          department: department
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${bearerToken}`
        }
      });
      const data = await response.json();
      console.log(data);
      // Display the updated data to the UI
      // ...
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="department">Department</label>
        <input
          type="text"
          id="department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        />
      </div>

      <button onClick={handleSubmit}>Add Student</button>
    </div>
  );
}

export default AddStudentForm;
