import { io, Socket } from 'socket.io-client';
import ArsenalResponse from '../types/modelTypes/ArsenalResponse';

const BASE_URL = import.meta.env.VITE_BASE_URL;


let socket: Socket | null;


export const getSocketInstance = (): Socket => {
    if (!socket) {
        socket = io(BASE_URL, {
            transports: ['websocket']
          }); 
    }
    return socket;
};

export const joinRoom = (region: string) => {
    const socket = getSocketInstance(); 
    console.log(socket.connected);    
    socket.emit('join_room', region.toLocaleLowerCase());  
};


export const activeOrNotSocket = (arsenal:ArsenalResponse)=>{
    const region:string[] = arsenal.organization.name.split(" ");
    if (region.length>1){
        console.log("start socket");
        joinRoom(region[2])
    }
}