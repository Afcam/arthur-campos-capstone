import { type ReactNode, useEffect, useState } from 'react';
import { type Socket } from 'socket.io-client';
import { getSocket } from '@/lib/socket';
import { SocketContext } from './index';

interface Props {
  children?: ReactNode;
}

export default function SocketProvider({ children }: Props) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = getSocket();
    setSocket(newSocket);

    // Clean up the socket connection on component unmount
    return () => {
      newSocket?.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}
