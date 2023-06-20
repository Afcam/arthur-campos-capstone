import { axios } from '@/lib/axios';

export const joinRoom = (roomId: number) => axios.post('/api/rooms/join', { room_id: roomId });

export const createRoom = () => axios.post('/api/rooms/create');
