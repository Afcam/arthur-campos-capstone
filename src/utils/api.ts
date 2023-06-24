import axios from '@/lib/axios';
// import socket from '@/lib/socket';

export const joinGameRoomAPI = (roomUUID: string, username: string) =>
  axios.post(`/api/rooms/join/${roomUUID}`, {
    room_uuid: roomUUID,
    username,
  });

export const createGameRoomAPI = (username: string) =>
  axios.post('/api/rooms/create', {
    username,
  });

export const getPlayerInfoAPI = () => axios.get('/api/player');

// Socket
// export const joinGameRoom = (roomUUID: string) => socket.emit('joinRoom', roomUUID);
// export const joinGameRoom = (roomUUID: string) => socket.on('joinRoom', roomUUID);
