import Client from './api'
import UserEmail from '../components/SignIn'


export const UpdateUserInfo = async ( data) => {
  try {
    // console.log(users.email)
    const res = await Client.put(`/api/users/update/16`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteUserAccount = async ( data) => {
  // try{
  //   const res = await Client.delete(`/api/users/${email}`, data)
  //   return res.data
  // } catch (error) {
  //   throw error
  // }
}