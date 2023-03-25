import axios from 'axios';

const UserAPI = {
    getAllUsers: () => axios.get("http://localhost:3001/api/users"),
    createUsers: (user) => axios.post("http://localhost:3001/api/users", user),
    deleteUsers: (id) => axios.delete(`http://localhost:3001/api/users/${id}`),
}

export default UserAPI;