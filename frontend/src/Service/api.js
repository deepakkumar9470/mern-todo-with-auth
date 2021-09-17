import axios from 'axios';


const url =  "http://localhost:5000/api/users"

const regUrl = "http://localhost:5000/api/auth"

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(`${url}/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user)
}

export const register = async (user) => {
    return await axios.post(`${regUrl}/register`, user)
}

export const login = async ( user) => {
    return await axios.post(`${regUrl}/login`, user)
}

export const logout = async ( ) => {
    return await axios.post(`${regUrl}/logout`)
}