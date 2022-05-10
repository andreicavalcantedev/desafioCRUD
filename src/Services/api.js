import axios from "axios";

export const apiFilmes = axios.create({
    baseURL: 'https://626d5b5be58c6fabe2d4732f.mockapi.io/',
    headers: {
        'Content-Type': 'application/json'
    }
  }); 