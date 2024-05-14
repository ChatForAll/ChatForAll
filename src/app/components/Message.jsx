import React, { useState } from "react";
import format from "date-fns/format";
import Image from "next/image";

const Message = ({ message }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <>
      {message.createdAt && (
        <div className="bg-[#e6e9ef] dark:bg-[#1e1e2e] my-2 p-4 flex flex-col rounded-2xl w-full md:w-3/4 lg:w:2/3 xl:w-3/5 2xl:w-1/2">
          <div className="flex flex-row">
            <Image
              className="w-8 h-8 rounded-full mr-2.5"
              width={32}
              height={32}
              src="/avatar.png"
              alt="user avatar"
            />
            <div className="flex items-center break-all whitespace-pre-wrap">
              {message.text}
            </div>
          </div>
          <div className="flex flex-row justify-between mt-2">
            <p className="flex items-center text-xs">
              {format(
                new Date(message.createdAt.seconds * 1000),
                "MMMM d, hh:mm a"
              )}
            </p>
            <button
              className="bg-none border-none rounded ease-in duration-200 hover:brightness-75"
              onClick={handleCopy}
              disabled={isCopied}
            >
              {isCopied ? (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  className="text-[#40a02b] dark:text-[#a6e3a1]"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.646 6.82-10.002a1 1 0 0 1 1.39-.263Z" />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  className="text-[#40a02b] dark:text-[#a6e3a1]"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2ZM8.535 4A3.998 3.998 0 0 1 12 2c1.48 0 2.773.804 3.465 2H17a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1.535ZM8 6H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
