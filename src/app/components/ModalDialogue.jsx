"use client";
import { useState, useEffect } from "react";

const ModalDialogue = ({ svgIcon, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "/") {
        event.preventDefault();
        openModal();
      }
      if (isOpen == true) {
        if (event.key === "Escape") {
          event.preventDefault();
          closeModal();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <button
        className="bg-none border-none rounded ease-in duration-200 hover:brightness-75"
        onClick={openModal}
      >
        {svgIcon}
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#dce0e89a] text-[#5c5f77] dark:bg-[#191724c0] dark:text-[#bac2de] backdrop-blur-sm p-4 rounded shadow">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold m-2">{title}</h2>
                <button
                  onClick={closeModal}
                  className="flex text-xs mb-4 ease-in duration-200 ring-inset rounded-xl p-0.5 ring-[#5c5f77] dark:ring-[#bac2de] ring-1 hover:brightness-50"
                >
                  <svg
                    stroke="currentColor"
                    fill="#bac2de"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <ul className="text-xs list-disc pl-1 flex flex-col">
                {items.map((item, index) => (
                  <li key={index} className="mb-6 flex flex-row">
                    <span className="p-0.5 m-1 font-semibold w-40">{item.key}</span>
                    {item.values.map((value, index) => (
                      <span
                        className="flex justify-center items-center m-1 p-0.5 w-11 border-[#5c5f77] dark:border-[#bac2de] border rounded-md"
                        key={index}
                      >
                        {value}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDialogue;
