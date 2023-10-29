import axios from "axios";

export const getUsers = async () => await axios.get('https://jsonplaceholder.typicode.com/user');
   
