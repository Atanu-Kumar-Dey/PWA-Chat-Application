import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import {Link} from "./Menu";  

const MsgBox = () => {
  const [showLink, setShowLink] = useState(false);
  const handleLink = () => {
    setShowLink(!showLink);
  };

  return (
    <div>
      <div className="relative flex">
        <input
          type="text"
          placeholder="Reply to @Everyone"
          className="w-full focus:outline-none bg-white text-gray-600 placeholder-gray-600 pl-4 fot-[400]  text-[14px] rounded-lg py-3"
        />
        <div className="absolute right-0 items-center inset-y-0  sm:flex">
          <div
            type="button"
            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            onClick={handleLink}>
            <FiLink size={24} />
          </div>
          {showLink && <Link/>}
          <div
            type="button"
            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
            <AiOutlineSend size={24} />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default MsgBox;
