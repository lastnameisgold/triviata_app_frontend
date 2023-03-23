import Client from './api'


export const GetUsers = async () => {
  try {
    // usaing '/api/users/baby1@fake.com' for my testing purposes
    const res = await Client.get('/api/users/view')
    return res.data
  } catch (error) {
    throw error
  }

}

export const UpdateUser = async () => {
  try{
    // usaing '/api/users/baby1@fake.com' for my testing purposes
    const res = await Client.put('/api/users/:email')
    return res.data
  } catch (error) {
    throw error
  }
}