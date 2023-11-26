import io from "socket.io-client";

let socket;

export const initSocket = () => {
  if (!socket) {
    socket = io(`${process.env.API_URL}/`, {
      // additional options if needed
    });

    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    // Handle other socket events as needed
  }
  return socket;
};
