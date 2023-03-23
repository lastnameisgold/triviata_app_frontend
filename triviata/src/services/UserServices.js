import Client from './api'


export const GetUsers = async () => {
  try {
    const res = await Client.get('/api/users/view/fakeemail@email.com')
    return res.data
  } catch (error) {
    throw error
  }
}