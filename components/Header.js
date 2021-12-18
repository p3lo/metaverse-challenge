import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';
import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './ModalPage';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { setUserData, isUserUpdating, useError, user } = useMoralis();
  const [usernameInput, setUsernameInput] = useState(user.getUsername());

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const setUsername = (e) => {
    e.preventDefault();
    if (!usernameInput) return;
    setUserData({
      username: usernameInput,
    });
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>Set nickname</ModalHeader>
        <ModalBody>
          <div className="flex items-center bg-gray-300 border border-blue-500 rounded-full">
            <input
              type="text"
              className="w-full px-3 py-1 text-sm text-gray-800 bg-gray-300 border-r border-blue-500 rounded-l-full outline-none"
              spellCheck="false"
              defaultValue={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
            />
            <AiOutlineCheck
              onClick={setUsername}
              className="w-4 h-4 mx-3 text-black transition ease-in-out delay-150 border-gray-400 rounded-r-full cursor-pointer hover:scale-125 hover:text-green-700"
            />
          </div>
        </ModalBody>
      </Modal>
      <div className="sticky top-0 z-20 p-5 text-blue-500 bg-black opacity-90 border-b-2 border-gray-700 shadow-sm h-[120px] sm:h-[100px]">
        <div className="relative flex items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="hidden text-2xl font-bold sm:inline-block">Welcome to the Metaverse</h1>
            <div className="flex items-center space-x-1">
              <p className="hidden text-xs font-bold truncate sm:text-sm sm:inline-block">{user.getUsername()}</p>
              <AiOutlineEdit className="hidden w-4 h-4 text-gray-400 cursor-pointer sm:inline-block" onClick={toggle} />
            </div>
          </div>
          <div className="absolute top-0 flex flex-col items-center mx-auto space-y-2 sm:right-0">
            <div className="relative w-[60px] h-[60px] border border-blue-500 rounded-full">
              <Avatar logoutOnPress={true} />
            </div>
            <div className="flex items-center space-x-1">
              <p className="text-xs font-bold truncate sm:hidden">{user.getUsername()}</p>

              <AiOutlineEdit className="w-4 h-4 text-gray-400 cursor-pointer sm:hidden" onClick={toggle} />
            </div>
          </div>
          {/* <ChangeUsername /> */}
        </div>
      </div>
    </>
  );
}

export default Header;
