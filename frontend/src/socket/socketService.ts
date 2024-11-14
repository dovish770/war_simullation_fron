import { io, Socket } from "socket.io-client";
import ArsenalResponse from "../types/modelTypes/ArsenalResponse";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const socket: Socket = io(BASE_URL);  

export function joinSocketRoom(roomName: string): void {
  socket.emit("joinRoom", roomName);

  socket.on("roomStatus", (message: string) => {
    console.log(message);  
  });
}

export const activeOrNotSocket = (arsenal:ArsenalResponse)=>{
    const region:string[] = arsenal.organization.name.split(" ");
    if (region.length>1){
        joinSocketRoom(region[2])    }
}