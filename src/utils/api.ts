import { axios } from '@/lib/axios';

export const joinGameRoom = (roomId: number) => axios.post('/api/rooms/join', { room_id: roomId });

export const createGameRoom = () => axios.post('/api/rooms/create');
