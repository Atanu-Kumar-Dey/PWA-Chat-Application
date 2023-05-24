import React, { lazy, Suspense } from "react";
import Header from "./Header";
import MsgBox from "./MsgBox";
import Loader from "./Loader";

const ChatComponent = lazy(() => import("./ChatComponent"));

const Msg = () => {
  return (
      <div className="bg-[rgba(255,249,244,1)]">
        <div className="relative top-0 left-0 w-full h-[16%] ">
          <Header />
        </div>
        {/* Message content */}
        <div className="scrollable-component h-full w-full overflow-y-auto">
          <div className="flex justify-center mx-auto font-light mt-24 mb-6">
            12 JAN,2023
          </div>
          <Suspense fallback={<Loader />}>
            <ChatComponent />
          </Suspense>
        </div>
        {/* Message content */}
        <div className="fixed bottom-0 w-full bg-[#FFFFF5] px-4 pt-2 pb-4 sm:mb-0">
          <MsgBox />
        </div>
      </div>
  );
};

export default Msg;
