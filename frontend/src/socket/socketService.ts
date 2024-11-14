import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;


export const getSocketInstance = (): Socket => {
    if (!socket) {
        socket = io('http://localhost:3000'); 
    }
    return socket;
};

export const joinRoom = (region: string) => {
    const socket = getSocketInstance(); 
    socket.emit('join_room', region);  
};