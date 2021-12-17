import { useMoralis } from 'react-moralis';

function ChangeUsername() {
  const { setUserData, isUserUpdating, useError, user } = useMoralis();

  const setUserName = (e) => {
    e.preventDefault();
    const username = prompt(`Enter your new Username (current: ${user.getUsername()})`);
    if (!username) return;
    setUserData({
      username,
    });
  };
  return (
    <div className="absolute text-sm top-5 right-5 ">
      <button onClick={setUserName} disabled={isUserUpdating} className="hover:text-pink-700">
        Change your username
      </button>
    </div>
  );
}

export default ChangeUsername;
