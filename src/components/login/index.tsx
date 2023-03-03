/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  Input,
  Button,
  Image,
  Link,
  Text,
  Alert,
  AlertDescription,
  CloseButton,
  AlertTitle,
  AlertIcon
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const roleBasedLogin = (role) => {
    if (role === 'admin') {
      router.push('admin/dashboard');
    } else if (role === 'student') {
      router.push('student/dashboard');
    } else {
      router.push('faculty/dashboard');
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      console.log(data);
      if (data.passwordChanged === false) {
        router.push('/changePassword');
      } else if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem(data.message, data.token);
        localStorage.setItem('role', data.role);
        roleBasedLogin(data.role);
        localStorage.setItem('hhjklmno-hjsohjso-toKeN', 'login success');
        // router.push('/home');
      } else {
        router.push('/login');
        alert('incorrect id password ');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" my="40px">
        <Image height="6" src="/trello-logo.svg" alt="brand logo" m="5"></Image>
      </Box>

      <Flex
        alignItems="center"
        flexDirection={['column', 'column', 'row', 'row']}
        justifyContent="center">
        <Image
          position="absolute"
          bottom="5%"
          left="5%"
          src="/login/left.svg"
          alt=" new user illustration"
          width={[0, '30%']}
        />
        <Image
          position="absolute"
          bottom="5%"
          right="5%"
          src="/login/right.svg"
          alt="task scheduler illustration"
          width={[0, '30%']}
          borderRadius="3px"
        />
        <Box
          p="25px 40px"
          width={['80%', '60%', '45%', '25%']}
          borderRadius="3px"
          bg="white"
          boxShadow="rgb(0 0 0 / 10%) 0 0 10px">
          <Box
            textAlign="center"
            color="#5E6C84"
            mt="5"
            mb="25"
            fontSize={['16px', '16px', '20px', '20px']}
            fontWeight="semibold"
            lineHeight="normal">
            <h1>Login</h1>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Email "
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={6}>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                width="full"
                mt={4}
                bg="success"
                color="white"
                // onClick={loginUser}
                // isLoading={isFetching}
                loadingText="Logging">
                Sign In
              </Button>
              <Box m="5" textAlign="center">
                <Link href="/signup" color="brand" p="2">
                  Sign up for an account
                </Link>
              </Box>
              {/* {showLoginError()} */}
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Login;

// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import {
//   Flex,
//   Box,
//   FormControl,
//   Input,
//   Button,
//   Image,
//   Link,
//   Text,
//   Alert,
//   AlertDescription,
//   CloseButton,
//   AlertTitle,
//   AlertIcon
// } from '@chakra-ui/react';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();
//   const roleBasedLogin = (role) => {
//     if (role === 'admin') {
//       router.push('admin/dashboard');
//     } else if (role === 'student') {
//       router.push('student/dashboard');
//     } else {
//       router.push('faculty/dashboard');
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       });
//       const data = await response.json();
//       console.log(data);
//       if (data.passwordChanged === false) {
//         router.push('/changePassword');
//       } else if (response.ok) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem(data.message, data.token);
//         localStorage.setItem('role', data.role);
//         roleBasedLogin(data.role);
//         localStorage.setItem('hhjklmno-hjsohjso-toKeN', 'login success');
//         // router.push('/home');
//       } else {
//         router.push('/login');
//         alert('incorrect id password ');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container p-12">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default Login;
