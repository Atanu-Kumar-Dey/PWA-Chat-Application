import React from "react";

const Loader = () => {
  return (
    <div className="w-full mx-auto">
      <div className="border border-blue-300 mb-5 shadow rounded-lg rounded-tl-none p-2 max-w-sm w-1/2 mx-10">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-5 w-5"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border relative border-blue-300 mb-5 shadow left-1/2 lg:left-2/3 rounded-lg rounded-br-none p-2 max-w-sm w-1/2 mx-2">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-5 w-5"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-blue-300 mb-5 shadow rounded-lg rounded-tl-none p-2 max-w-sm w-1/2 mx-10">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-200 h-5 w-5"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
