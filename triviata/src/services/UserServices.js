import Client from './api'
import UserEmail from '../components/SignIn'

export const GetUsers = async (data) => {
  try {
    console.log(UserEmail)
    const res = await Client.get(`/api/users/view/${UserEmail}`, data )

    return res.data
  } catch (error) {
    throw error
  }
}