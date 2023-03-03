/* eslint-disable prettier/prettier */
// AddFaculties.jsx

import React, { useState } from 'react';

const AddFaculties = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const bearerToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDAwOTQ1ZjcwOGU1MGZhOWVmMGMwNTgiLCJlbWFpbCI6Imtra2Z1bmRlMjJAZ21haWwuY29tIiwiaWF0IjoxNjc3Nzc3MzMwLCJleHAiOjE2NzkwNzMzMzB9.uBF1WMSXmmDlYVkDSB4Kd6N-e3nyCWRg9bOtkTzJQVw';

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('localhost:5000/api/users/add-faculties', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${bearerToken}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      setSuccess(true);
      setError(null);
      console.log(await response.json());
    } catch (error) {
      console.error(error);
      setSuccess(false);
      setError('Error adding faculties.');
    }

    // Reset the form
    event.target.reset();
    setFile(null);
  };

  return (
    <div>
      <h1>Add Faculties</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-input">Upload CSV or Excel file:</label>
        <input type="file" id="file-input" name="file" accept=".csv" onChange={handleFileChange} />
        <button type="submit">Add Faculties</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>Faculties added successfully!</p>}
    </div>
  );
};

export default AddFaculties;
