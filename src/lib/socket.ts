import { io, type Socket } from 'socket.io-client';
import { API_URL } from '@/config/config';
import storage from '@/utils/storage';

const token = storage.getToken() ?? '';

const socket: Socket = io(API_URL, {
  auth: { token: `Bearer ${token}` },
});

export default socket;
