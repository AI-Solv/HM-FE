"use client";
import Link from "next/link";

export default function AuthLinks() {
  return (
    <div className="flex justify-center text-gray-500 text-sm font-medium gap-2">
      <Link
        href="/findPassword"
        className="text-[#767676] text-sm font-normal font-['Pretendard'] leading-tight"
      >
        비밀번호 찾기
      </Link>
      <div className="flex justify-center items-center text-[#767676] text-sm font-normal font-['Pretendard'] leading-tight">
        |
      </div>
      <Link
        href="/signup"
        className="text-[#767676] text-sm font-normal font-['Pretendard'] leading-tight"
      >
        회원가입
      </Link>
    </div>
  );
}
