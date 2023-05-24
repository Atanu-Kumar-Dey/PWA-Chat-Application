import React from "react";
import { SlPeople } from "react-icons/sl";
import {IoCallOutline} from "react-icons/io5"
import {VscReport} from "react-icons/vsc"
import {FiCamera} from "react-icons/fi"
import {HiOutlineVideoCamera} from "react-icons/hi"
import {IoDocumentAttachOutline} from "react-icons/io5"


 export const Settings = () => {
  return (
    <div className="absolute right-2 top-10 w-auto   drop-shadow-lg">
      <div className="border bg-white shadow rounded-lg rounded-tr-none  w-full mx-auto p-1">
        <div className="flex-1">
          <div className="border-b-[1px] py-3 px-2 hover:shadow-md border-rgba(229, 229, 224, 1) flex items-start">
            <SlPeople size={20} className="mr-3" />
            Member
          </div>
          <div className="border-b-[1px] py-3 px-2 hover:shadow-md border-[rgba(229, 229, 224, 1)] flex ">
            <IoCallOutline size={20} className="mr-3" />
            Share Number
          </div>
          <div className=" py-3 px-2 flex hover:shadow-md items-start">
            <VscReport size={20} className="mr-3" />
            Report
          </div>
        </div>
      </div>
    </div>
  );
};

export const Link = () => {
  return (
    <div className="absolute w-auto h-auto px-5 py-2 right-3 rounded-full bottom-[65px] flex space-x-3 bg-[#008000]">
      <FiCamera className="text-white" size={26}/>
      <HiOutlineVideoCamera  className="text-white" size={26}/>
      <IoDocumentAttachOutline  className="text-white" size={26}/>
    </div>
  ); 
};

