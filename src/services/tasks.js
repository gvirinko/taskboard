import axios from 'axios'

// gets data from API
const getAll = () => {
  const request = axios.get('http://localhost:8000/get_lists')
  return request.then(response => response.data)
}

export default getAll