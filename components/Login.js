import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="relative h-screen bg-black">
      <h1>I am the login screen</h1>
      <div className="absolute z-50 flex flex-col items-center justify-center w-full space-y-4 h-4/6">
        {/* Logo */}
        <Image
          className="object-cover rounded-full"
          src="https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg"
          height={200}
          width={200}
        />
        {/* Button */}
        <button
          onClick={() => authenticate()}
          className="p-5 font-bold transition ease-in-out delay-150 bg-blue-300 border border-black hover:shadow-md hover:shadow-gray-700 hover:translate-y-[2px] hover:scale-102"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full max-h-screen">
        <Image src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
