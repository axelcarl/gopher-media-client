import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

}

export const Button: React.FC<ButtonProps> = ({children, onClick, }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white rounded-lg px-4 py-2 w-min hover:bg-indigo-500"
    >
      {children}
    </button>
  );
};
