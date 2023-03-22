//Need to rename file and change function to whatever page we want protected for logged in users only. - AH

export const GetPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}