import io from "socket.io-client";

let socket;

export const initSocket = (gameId) => {
  socket = io(`ws/${process.env.NEXT_PUBLIC_API_URL.split("//")[1]}/ws/${gameId}`, {
    reconnection: true,
    reconnectionDelay: 1000,

  });

  socket.on("connect", () => {
    console.log("Connected to Socket.IO server");
  });

  // Handle other socket events as needed
  return socket;
};

export const closeSocket = () => {
  socket.close(1000)
}