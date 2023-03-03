/* eslint-disable prettier/prettier */
// api/users.js
import { useRouter } from 'next/router';

const baseUrl = 'http://localhost:5000';
const router = useRouter();

export async function getLogin(email: string, password: string) {
  try {
    const response = await fetch(`${baseUrl}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (data.passwordChanged === false) {
      router.push('/login');
    } else if (response.ok) {
      localStorage.setItem('token', data.token);
    }
    return data;
  } catch (error) {
    return { success: false, message: error };
  }
}
