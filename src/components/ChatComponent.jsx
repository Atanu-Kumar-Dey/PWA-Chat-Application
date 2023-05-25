import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

function ChatComponent() {
  const [chats, setChats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    // Mock API endpoint with pagination support
    const apiUrl = `http://3.111.128.67/assignment/chat?page=${currentPage}`;

    // Fetch chats from the API
    const fetchChats = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(apiUrl,{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      });
        const newChats = response.data.chats;

        // Append new chats to the existing list
        setChats((prevChats) => [...prevChats, ...newChats]);
        setCurrentPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("Error fetching chats:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchChats();
  }, []); // Only run on the initial render
  useEffect(() => {
    // Callback function when the last chat is intersecting
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoading) {
          // Fetch the next page of chats
          fetchNextPage();
        }
      });
    };

    // Create an Intersection Observer instance
    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    // Observe the last chat element
    const lastChatElement = document.getElementById("last-chat");
    if (lastChatElement) {
      observer.current.observe(lastChatElement);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [isLoading]);

  const fetchNextPage = async () => {
    try {
      setIsLoading(true);
      const nextPageUrl = `http://3.111.128.67/assignment/chat?page=${currentPage}`;
      const response = await axios.get(nextPageUrl,{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
      const newChats = response.data.chats;

      // Append new chats to the existing list
      setChats((prevChats) => [...prevChats, ...newChats]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching next page:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[95%] md:mx-auto" >
      {chats.map((chat, index) => (
        <div className="chat" key={chat.id}>
          {chat.sender.self === true ? (
            <div className="chat-message">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 mb-5 max-w-xl drop-shadow-xl mx-2 order-2 items-start">
                  <div className="left-6 relative">
                    <span className="p-3 rounded-xl mr-5 md:sm-0 inline-block rounded-br-none bg-[#1c63d5] text-white text-[14px] font-[500] ">
                      {chat.message}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 mb-5 max-w-xl  mx-4 order-2 items-start">
                  <div className="relative ">
                    <span className="absolute  right-[-5px] bottom-[-5px]">
                      <svg
                        id="changeColor"
                        fill="#DC7633"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="15"
                        zoomAndPan="magnify"
                        viewBox="0 0 375 374.9999"
                        height="15"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.0">
                        <path
                          id="pathAttribute"
                          d="M 319.652344 296.835938 C 301.910156 303.40625 279.570312 321.878906 269.804688 338.0625 C 260.03125 354.246094 237.632812 362.226562 219.816406 355.867188 C 201.996094 349.507812 172.996094 349.324219 155.09375 355.449219 C 137.191406 361.574219 114.898438 353.308594 105.339844 337 C 95.78125 320.691406 73.6875 301.929688 56.027344 295.132812 C 38.375 288.335938 26.617188 267.691406 29.789062 249.0625 C 32.964844 230.433594 28.113281 201.878906 18.964844 185.339844 C 9.8125 168.796875 14.09375 145.4375 28.519531 133.203125 C 42.941406 120.972656 57.605469 95.984375 61.242188 77.4375 C 64.878906 58.894531 83.195312 43.746094 102.117188 43.632812 C 121.039062 43.519531 148.355469 33.792969 163.078125 21.921875 C 177.800781 10.046875 201.582031 10.203125 216.152344 22.261719 C 230.71875 34.324219 257.90625 44.40625 276.824219 44.761719 C 295.746094 45.117188 313.863281 60.503906 317.257812 79.09375 C 320.65625 97.679688 334.996094 122.855469 349.257812 135.273438 C 363.519531 147.695312 367.5 171.109375 358.136719 187.53125 C 348.773438 203.949219 343.550781 232.4375 346.484375 251.109375 C 349.417969 269.777344 337.394531 290.269531 319.652344 296.835938 Z M 319.652344 296.835938 "
                          fillOpacity="1"
                          fillRule="nonzero"
                          fill="blue"></path>
                        <g id="inner-icon" transform="translate(85, 75)">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="223"
                            zoomAndPan="magnify"
                            viewBox="0 0 30 30.000001"
                            height="223"
                            preserveAspectRatio="xMidYMid meet"
                            version="1.0"
                            id="IconChangeColor">
                            <defs>
                              <clipPath id="id1">
                                <path
                                  d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                                  clipRule="nonzero"
                                  id="mainIconPathAttribute"
                                  fill="#ffffff"></path>
                              </clipPath>
                            </defs>
                            <g clipPath="url(#id1)">
                              <path
                                fill="#ffffff"
                                d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                                fillOpacity="1"
                                fillRule="nonzero"
                                id="mainIconPathAttribute"></path>
                            </g>
                          </svg>{" "}
                        </g>
                      </svg>
                    </span>
                    <img
                      src={chat.sender.image} alt="user img"
                      className="w-7 h-7 rounded-full"
                    />
                  </div>
                  <div className="left-6 relative drop-shadow-xl">
                    <span className="p-3 rounded-xl mr-5 md:sm-0 inline-block rounded-tl-none text-black bg-white text-[14px] font-[500]">
                      {chat.message}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {index === chats.length - 1 && (
            <div id="last-chat" style={{ marginTop: "10px" }}></div>
          )}
        </div>
      ))}
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default ChatComponent;
