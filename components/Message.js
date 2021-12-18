import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import TimeAgo from 'timeago-react';

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

  return (
    <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`}>
      <div className={`relative w-7 h-7 ${isUserMessage && 'order-last ml-2'}`}>
        <Avatar username={message.get('username')} />
      </div>
      <div
        className={`flex px-3 py-1 space-x-4 rounded-lg text-sm text-gray-800 ${
          isUserMessage ? 'rounded-br-none bg-blue-400' : 'rounded-bl-none bg-green-400'
        }`}
      >
        <p>{message.get('message')}</p>
      </div>
      <TimeAgo
        className={`text-[10px] italic text-blue-600 ${isUserMessage && 'order-first pr-1'}`}
        datetime={message.createdAt}
      />
      <p className={`absolute text-xs -bottom-5 ${isUserMessage ? 'text-blue-600' : 'text-green-600'}`}>
        {message.get('username')}
      </p>
    </div>
  );
}

export default Message;
