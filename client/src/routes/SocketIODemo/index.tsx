import React, { ChangeEvent, FormEvent, useState } from 'react';
import Socket from '../../services/Socket';

export default function SocketIODemo() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  Socket.on('messages', (newMessage) => {
    setMessages(newMessage);
    document.getElementById('test')?.scrollIntoView({ behavior: 'smooth' });
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    Socket.emit('sendMessage', input);
    setInput('');
  }

  return (
    <div>
      <h3>SocketIO Demo</h3>
      <div
        id="messages-container"
        style={{
          backgroundColor: 'RGBA(255, 255, 255, 0.1)',
          maxHeight: '400px',
          overflow: 'auto',
          borderRadius: '4px',
        }}
      >
        {messages.map((m, i) => (
          <pre key={i}>{m}</pre>
        ))}
        <div id="test" style={{ float: 'left', clear: 'both' }}></div>
      </div>
      <form onSubmit={handleSubmit} style={{ paddingTop: '16px' }}>
        <input
          type="text"
          placeholder="Chat here..."
          value={input}
          onChange={handleChange}
          style={{ width: '100%', height: '2em' }}
        />
      </form>
    </div>
  );
}
