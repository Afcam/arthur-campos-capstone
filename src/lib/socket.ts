import { io, type Socket } from 'socket.io-client';
import { API_URL } from '@/config/config';
import storage from '@/utils/storage';

export const getSocket = () => {
  const token = storage.getToken();

  return token
    ? io(API_URL, {
        auth: { token: `Bearer ${token}` },
      })
    : null;
};
