import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  label,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-[54px] px-4 py-[15px] rounded-[10px] flex justify-center items-center gap-2 mt-12
      ${
        disabled
          ? "bg-[#f1eeff] text-[#bdbdbd] cursor-not-allowed"
          : "bg-[#6b60be] text-white hover:bg-[#5a51b3]"
      }`}
    >
      {label}
    </button>
  );
}
