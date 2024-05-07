import axios from './axios.config'

export const getUserById = async (id) => {
    return await axios.get(`/posts/${id}`)
}