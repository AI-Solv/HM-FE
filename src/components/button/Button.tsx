import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: "small" | "large";
}

export default function Button({
  label,
  onClick,
  disabled = false,
  size = "large",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        size === "small"
          ? "w-auto h-[40px] px-4 py-2"
          : "w-full h-[54px] px-4 py-[15px] mt-12"
      } rounded-[10px] flex justify-center items-center gap-2
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
