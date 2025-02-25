import React from "react";

interface ResolveButtonProps {
  label: string;
  onClick?: () => void;
}

export default function ResolveButton({
  label,
  onClick,
}: ResolveButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ color: "#6b60be" }}
      className="w-auto h-[40px] py-2 rounded-[10px] bg-transparent text-base font-bold font-['Pretendard'] leading-tight"
    >
      {label}
    </button>
  );
}
