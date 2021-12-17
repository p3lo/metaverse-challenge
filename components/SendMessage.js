import { useState } from 'react';
import { useMoralis } from 'react-moralis';

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    setMessage('');
  };
  return (
    <form className="fixed flex w-11/12 max-w-2xl px-6 py-4 bg-black border-2 border-blue-400 rounded-full shadow-xl shadow-blue-400 bottom-10 opacity-80">
      <input
        className="flex-grow pr-5 text-white placeholder-gray-500 bg-transparent border-blue-400 outline-none"
        type="text"
        placeholder={`Enter a Message ${user.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" onClick={sendMessage} className="font-bold text-pink-500">
        Send
      </button>
    </form>
  );
}

export default SendMessage;
