import React from "react";

const Keypad = () => {
  return (
    <div className="grid grid-cols-3 gap-2 p-4 bg-gray-800 rounded-lg">
      {Array.from({ length: 9 }, (_, i) => (
        <button
          key={i}
          className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-md text-white"
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
