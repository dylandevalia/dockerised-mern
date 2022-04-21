import { io, Socket } from 'socket.io-client';

interface ServerToClientEvents {
  messages: (messages: string[]) => void;
}

interface ClientToServerEvents {
  sendMessage: (message: string) => void;
}

class SocketConnector {
  _socket: Socket<ServerToClientEvents, ClientToServerEvents>;

  constructor() {
    this._socket = io('http://localhost:3000', {
      path: '/api/socket',
      transports: ['websocket'],
    });

    this._socket.on('connect', () => {
      console.log('<<< connection successful');
    });

    this._socket.on('connect_error', (err: Error) => {
      console.log(`<<< connect_error due to ${err.message}`);
    });
  }

  get socket() {
    return this._socket;
  }
}

export default new SocketConnector().socket;
