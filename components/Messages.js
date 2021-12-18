import { useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';
import Message from './Message';
import SendMessage from './SendMessage';

const MINS_DURATION = 15;

function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    'Messages',
    (query) => query.ascending('createdAt').greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION)),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-56">
      <div className="px-4 py-2 text-sm space-y-7">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="mt-5 text-center text-gray-800">
        <p>You're up to date {user.getUsername()}!</p>
      </div>
    </div>
  );
}

export default Messages;
