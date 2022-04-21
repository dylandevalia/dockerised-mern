export interface ServerToClientEvents {
  messages: (messages: string[]) => void;
}

export interface ClientToServerEvents {
  sendMessage: (message: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SocketData {}
