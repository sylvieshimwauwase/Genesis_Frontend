import axios from 'axios';
import apiUrl from './apiUrl';

const logout = async () => {
    try {
        await axios.post(`${apiUrl}api/logout/`, null, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
    } catch (error) {
        console.error('Error logging out:', error);
    }
    document.cookie = 'token=; Max-Age=0; path=/;'; // Clear the cookie
    window.location.href = '/login';
};

export default logout;
