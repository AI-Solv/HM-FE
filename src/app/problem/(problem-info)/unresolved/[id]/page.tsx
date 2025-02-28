"use client";

import Header from "@/components/Header";
import Modal from "@/components/modal/Modal";
import ProblemDetails from "@/containers/problem/ProblemDetails";
import ResolveButton from "@/containers/problem/ResolveButton";
import Image from "next/image";
import { useEffect, useState } from "react";

const mockData = {
  id: 1,
  title: "휴가 날짜 고민",
  description: "휴가 날짜를 언제로 정해야 할지 고민입니다.",
  status: "unresolved",
  type: "manual",
  category: "학업",
  deadline: "00일 00:00:00 남았어요",
  created_at: "2024년 12월 30일",
  resolution: "고민을 해결한 내용 또는 AI가 제시한 답변",
};

const aiMockData = {
  message: "AI가 생성한 답변입니다.",
  ai_solution:
    "AI가 추천한 타임 매니지먼트 전략을 적용하여 일정을 조율했습니다.",
};

export default function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const {
    title,
    description,
    status,
    type,
    category,
    deadline,
    created_at,
    resolution,
  } = mockData;
  const { ai_solution } = aiMockData;
  const [id, setId] = useState<string | null>(null);
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;
      setId(id);
    };
    fetchData();
  }, [params]);

  const onHandleModalStatus = () => {
    setModalStatus(!modalStatus);
  };

  return (
    <div className="w-full">
      <Header
        buttonSrc="/icons/Close_Button.png"
        rightComponent={
          <ResolveButton
            label="고민해결"
            onClick={onHandleModalStatus}
          />
        }
      />
      <div>
        <div className="text-[#6b60be] text-lg font-semibold font-['Pretendard'] mt-6 mb-4">
          {deadline}
        </div>
      </div>
      <div className="text-[#222222] text-2xl font-semibold font-['Pretendard'] mb-2">
        {title}
      </div>
      <div className="text-[#222222] text-sm font-medium font-['Pretendard']">
        {category} * {created_at}
      </div>
      <div className="w-full flex items-center justify-center py-20">
        <Image
          src="/images/Problem_Character.png"
          alt="캐릭터"
          width={745}
          height={542}
        />
      </div>
      <ProblemDetails
        type="description"
        text={description}
      />
      <ProblemDetails
        type="ai_solution"
        status={false}
        text={ai_solution}
      />
      {modalStatus && (
        <Modal
          text="해당 고민을 해결 리스트에 넣을 건가요?"
          setModal={onHandleModalStatus}
          otherPage={`/problem/complete/${id}`}
        />
      )}
    </div>
  );
}
