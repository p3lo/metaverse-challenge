import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-hidden overflow-y-scroll bg-gradient-to-b from-gray-500 to-gray-100">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-screen-2xl">
        <Header />
        <Messages />
      </div>

      {/* <div className="">
        <button
          className="bg-white px-5 py-3 border border-gray-500 hover:shadow-gray-300 hover:shadow-md transition ease-in-out delay-150 hover:translate-y-[2px] hover:scale-102"
          onClick={logout}
        >
          Logout
        </button>
      </div> */}
    </div>
  );
}
