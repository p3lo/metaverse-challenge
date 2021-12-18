import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="relative h-screen bg-black">
      <div className="absolute z-50 flex flex-col items-center justify-center w-full space-y-4 h-5/6">
        {/* Logo */}
        {/* <Image
          className="object-cover rounded-full "
          src="https://cdn.pixabay.com/photo/2014/12/27/17/36/sun-581299_1280.jpg"
          height={200}
          width={200}
        /> */}
        {/* Button */}
        <button
          onClick={() => authenticate()}
          className="px-4 py-3 font-bold transition ease-in-out delay-150 bg-blue-300 border border-black hover:shadow-sm hover:scale-105"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full max-h-screen opacity-60">
        <Image
          src="https://cdn.pixabay.com/photo/2020/02/13/15/37/ai-4846063_1280.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
