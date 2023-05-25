import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { Settings } from "./Menu";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="py-4 px-5 border-b-[2px] border-[rgba(229, 229, 224, 1)">
      <div className="flex relative sm:items-center justify-between items-center space-x-4 mb-2">
        <div className="flex relative items-center justify-between space-x-4">
          <div className="relative">
            <AiOutlineArrowLeft size={20} />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="my-1  flex items-center font-bold text-[24px]">
              Trip 1
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FiEdit size={20} />
        </div>
      </div>
      <div className="flex relative sm:items-center justify-between items-center space-x-4">
        <div className="flex relative items-center justify-between space-x-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt=""
              className="w-14 sm:w-16 h-14 sm:h-16 rounded-full"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <div className="mt-1 text-[16px] flex items-center">
              From
              <span className="text-black font-bold text-[20px]">
                &nbsp;IGI Airport, T3
              </span>
            </div>
            <div className="text-[16px] flex items-center">
              To
              <span className="text-lg text-black  font-bold  ml-2">
                Sector 28
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2" onClick={showMenuHandler}>
          <HiDotsVertical />
        </div>
        {showMenu && <Settings />}
      </div>
    </div>
  );
};

export default Header;
