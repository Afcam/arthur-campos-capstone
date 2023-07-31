import React, {createContext, useContext, useEffect, useState} from 'react'
import io from 'socket.io-client'
import {type Socket} from 'socket.io-client'

const SocketContext = createContext<Socket | null>(null)

export const useSocket = () => useContext(SocketContext)

interface SocketProviderProps {
	url: string
	children: React.ReactNode
}

export const SocketProvider = ({url, children}: SocketProviderProps) => {
	const [socket, setSocket] = useState<Socket | null>(null)

	useEffect(() => {
		const newSocket = io(url)
		setSocket(newSocket)

		return () => {
			newSocket.disconnect()
		}
	}, [url])

	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	)
}
