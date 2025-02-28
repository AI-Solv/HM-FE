"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface ProblemItemProps {
  id: number;
  title: string;
  category: string;
}

export default function ProblemItem({
  id,
  title,
  category,
}: ProblemItemProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/problem/unresolved/${id}`);
  };

  return (
    <button
      id="wrapper"
      className="relative flex w-full h-20 bg-white rounded-[10px] border border-2 border-[#dbd5ff] mb-4 p-4 z-10"
      style={{
        borderWidth: "2px",
        borderColor: "#dbd5ff",
        borderStyle: "solid",
      }}
      onClick={handleNavigate}
    >
      <div
        id="problem-info"
        className="relative flex gap-2"
      >
        <Image
          src={`/icons/Message.png`}
          alt="메시지"
          width={90}
          height={43}
        />
        <div className="flex flex-col justify-between">
          <div
            id="problem-title"
            className="flex w-full h-5 text-[#424242] text-lg font-semibold font-['Pretendard']"
          >
            {title}
          </div>
          <div
            id="problem-category"
            className="flex w-full h-[17px] text-[#767676] text-m font-medium font-['Pretendard']"
          >
            {category}
          </div>
        </div>
      </div>
      <button className="absolute right-4 z-20">
        <Image
          src={`/icons/Edit_Button.png`}
          alt="수정버튼"
          width={16}
          height={4}
        />
      </button>
    </button>
  );
}
