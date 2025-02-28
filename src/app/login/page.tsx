"use client";

import Header from "@/components/Header";
import AuthDivider from "@/containers/login/AuthDivider";
import AuthLinks from "@/containers/login/AuthLinks";
import LoginForm from "@/containers/login/LoginForm";
import SNSLogin from "@/containers/login/SNSLogin";

export default function Page() {
  return (
    <div className="w-full p-6">
      <Header buttonSrc="/icons/Back_Button.png" />
      <div className="min-h-[60px]"></div>
      <h1 className="text-[#222222] text-2xl font-bold font-['Pretendard'] mb-3">
        할까말까에 오신걸 환영합니다!
      </h1>
      <h2 className="text-[#767676] text-base font-medium font-['Pretendard'] mb-9">
        함께 고민들을 정리해나가요!
      </h2>
      <LoginForm />
      <AuthLinks />
      {/* <AuthDivider /> */}
      <SNSLogin />
    </div>
  );
}
