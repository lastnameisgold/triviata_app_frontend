import Client from './api'
import UserEmail from '../components/SignIn'


export const UpdateUserInfo = async (id, data) => {
  try {
    // console.log(users.email)
    const res = await Client.put(`/api/users/update/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteUserAccount = async ( id) => {
  try{
    const res = await Client.delete(`/api/users/delete/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}