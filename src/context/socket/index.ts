import React, { useContext } from 'react';
import { type Socket } from 'socket.io-client';

export interface SocketContextProps {
  socket: Socket | null;
}

export const SocketContext = React.createContext<SocketContextProps>({
  socket: null,
});

export const useSocket = () => useContext(SocketContext);
