import axios from 'axios'

const Api = axios.create({
	baseURL: 'https://swapi.co/api/',
	withCredentials: false,
	header: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})

export default Api
