import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center h-screen">
        <button className="px-5 py-3 border border-gray-500 hover:shadow-gray-300 hover:shadow-md" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
