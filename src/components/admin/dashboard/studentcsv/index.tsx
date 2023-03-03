/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

function StudentCsv() {
  const [csvData, setCsvData] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const bearerToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDAwOTQ1ZjcwOGU1MGZhOWVmMGMwNTgiLCJlbWFpbCI6Imtra2Z1bmRlMjJAZ21haWwuY29tIiwiaWF0IjoxNjc3Nzc3MzMwLCJleHAiOjE2NzkwNzMzMzB9.uBF1WMSXmmDlYVkDSB4Kd6N-e3nyCWRg9bOtkTzJQVw';

  const handleOnDrop = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/users/add-students', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${bearerToken}`
        }
      });
      const data = await response.json();
      console.log('Success:', data);
      setResponseData(data); // set the data received from the server to the state variable
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleOnDrop} />
      <table>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {responseData.length > 0 && (
        <div>
          <h3>Data received from the server:</h3>
          <table>
            <tbody>
              {responseData.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.enrollment_number}</td>
                  <td>{row.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentCsv;
