import axios from 'axios';

//you can add full URL as API_URL or go to front end package.json and add proxy as url
//for example http://localhost:5000
const API_URL = 'https://goalsetter-api.onrender.com/api/users/';

//Register user

const register = async (userData) => {
	const response = await axios.post(API_URL, userData);

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};

//login user
const login = async (userData) => {
	const response = await axios.post(API_URL + 'login', userData);
	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}
	return response.data;
};

//logout user
const logout = () => {
	localStorage.removeItem('user');
};

const authService = {
	register,
	login,
	logout,
};

export default authService;
