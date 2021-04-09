import axios from 'axios'

const getAll = () => {
  const request = axios.get("http://localhost:8000/get_lists")
  return request.then(response => response.data)
}

export default getAll