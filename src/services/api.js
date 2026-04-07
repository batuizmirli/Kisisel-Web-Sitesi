import axios from 'axios'

export const reqresApi = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function getSampleUsers() {
  const response = await reqresApi.get('/users?page=1&per_page=3')
  return response.data.data
}

export async function postWorkintechContact(payload) {
  const response = await reqresApi.post('/workintech', payload)
  return response.data
}
