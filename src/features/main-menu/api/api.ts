import axios from '@/lib/axios';
import Axios from 'axios';

interface payload {
  username: string;
  avatar: string;
  room_uuid?: string;
}

export const joinGameRoomAPI = (payload: payload) =>
  axios.post('/api/rooms/join', payload);

export const createGameRoomAPI = (payload: payload) =>
  axios.post('/api/rooms/create', payload);

export const getPlayerInfoAPI = () => axios.get('/api/player');
export const startGameAPI = () => axios.get('/api/player/start');

export const getGithubUserInfo = (username: string) =>
  Axios({
    method: 'GET',
    url: `/users/${username}`,
    baseURL: 'https://api.github.com',
  });
