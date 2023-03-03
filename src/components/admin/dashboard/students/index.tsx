/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

const StudentTab = (): JSX.Element => {
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [myArray, setMyArray] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const bearerToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDAwOTQ1ZjcwOGU1MGZhOWVmMGMwNTgiLCJlbWFpbCI6Imtra2Z1bmRlMjJAZ21haWwuY29tIiwiaWF0IjoxNjc3Nzc3MzMwLCJleHAiOjE2NzkwNzMzMzB9.uBF1WMSXmmDlYVkDSB4Kd6N-e3nyCWRg9bOtkTzJQVw';

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/students', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${bearerToken}`
        }
      });
      const data = await response.json();
      console.log(data);
      if (data && data.students) {
        setMyArray(data.students);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleUpdate = async (
    id: string,
    email: string,
    enrollment_number: string,
    department: string,
    name: string
  ) => {
    setIsEditOpen(true);
    try {
      const response = await fetch(`http://localhost:5000/api/users/student/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          department: department,
          email: email,
          enrollment_number: enrollmentNumber,
          name: name
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${bearerToken}`
        }
      });

      const data = await response.json();
      console.log(data);
      setIsEditOpen(false);
      alert(data.message);
      if (data && data.students) {
        setMyArray(data.students);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/student/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${bearerToken}`
        }
      });
      const data = await response.json();
      console.log(data);
      if (data && data.students) {
        setMyArray(data.students);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = (student) => {
    setSelectedStudentId(student._id);
    setName(student.name);
    setEmail(student.email);
    setDepartment(student.department);
    setEnrollmentNumber(student.enrollment_number);
    setIsEditOpen(true);
  };

  return (
    <Box minHeight="50vh" flexGrow={3} mx="2%" boxShadow="base" rounded="lg" bg="white" p="1rem">
      {isEditOpen && (
        <div>
          <label>Student ID</label>
          <label>{selectedStudentId}</label>
          <label>Student Name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <label>Student Email</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Student department</label>
          <Input value={department} onChange={(e) => setDepartment(e.target.value)} />
          <label>Student enrollment_number</label>
          <Input value={enrollmentNumber} onChange={(e) => setEnrollmentNumber(e.target.value)} />
          <Button onClick={() => setIsEditOpen(false)}>Close</Button>
          <Button
            onClick={() =>
              handleUpdate(selectedStudentId, email, department, enrollmentNumber, name)
            }>
            Submit
          </Button>
        </div>
      )}
      {myArray.length > 0 && (
        <ul>
          {myArray.map((student) => (
            <li key={student._id}>
              {student.name}, {student.email} , {student.department} , {student.enrollment_number}
              <Button onClick={() => handleEdit(student)}>Edit</Button>
              <Button onClick={() => handleDelete(student._id)}>Delete</Button>
            </li>
          ))}
        </ul>
      )}
      <br></br>
    </Box>
  );
};

export default StudentTab;
