import axios from '@/lib/axios';
// import socket from '@/lib/socket';

export const joinGameRoomAPI = (roomUUID: string) =>
  axios.post(`/api/rooms/join/${roomUUID}`);

export const createGameRoomAPI = () => axios.post('/api/rooms/create');

// Socket
// export const joinGameRoom = (roomUUID: string) => socket.emit('joinRoom', roomUUID);
// export const joinGameRoom = (roomUUID: string) => socket.on('joinRoom', roomUUID);
