"use client";

import Image from "next/image";
import { useState } from "react";

interface ProblemDetailsProps {
  type: string;
  status?: boolean;
  text?: string;
}

export default function ProblemDetails({
  type,
  status,
  text,
}: ProblemDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-4">
      <button
        onClick={toggleContent}
        disabled={!text}
        style={{
          borderRadius: "10px",
          border: text
            ? isOpen
              ? ""
              : "2px solid #6b60be"
            : "1px solid #d0c8ff",
          cursor: text ? "pointer" : "not-allowed",
        }}
        className="w-full h-[54px] px-4 py-[15px] bg-white rounded-[10px] 
         flex items-center justify-between"
      >
        <div
          className={`font-['Pretendard'] ${
            text
              ? isOpen
                ? "text-[#6b60be] text-base font-semibold"
                : "text-sm text-[#222222] font-medium"
              : "text-[#767676] text-sm font-normal"
          }`}
        >
          {type === "description" && "고민 내용 보기"}
          {type === "ai_solution" &&
            (status
              ? "✉️ 고미니의 답장이 도착했어요!"
              : "아직 고민이의 답변이 도착하지 않았어요.")}
          {type === "my_solution" && "📚 나의 해답 보기"}
        </div>
        <Image
          src={`${
            text
              ? "/icons/Drop_Button.png"
              : "/images/Lock_Image.png"
          }`}
          alt="표시"
          width={28}
          height={28}
          style={{
            transform: isOpen
              ? "rotate(180deg)"
              : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>
      <div
        className={`mt-2 transition-all ease-in-out duration-300 ${
          isOpen ? "block" : "hidden"
        } overflow-hidden`}
      >
        <div
          style={{
            borderRadius: "10px",
            border: "1.8px solid #6b60be",
          }}
          className="w-full h-[229px] rounded-[10px] p-6"
        >
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
