"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
}

export default function Header({
  title,
  showBackButton = true,
}: HeaderProps) {
  const router = useRouter();

  return (
    <header className="w-full flex items-center h-12 px-4">
      {showBackButton && (
        <button
          onClick={() => router.back()}
          className="mr-2"
        >
          <Image
            src="/icons/Back_Button.png"
            alt="뒤로가기"
            width={24}
            height={24}
          />
        </button>
      )}
      {title && (
        <h1 className="text-lg font-semibold">{title}</h1>
      )}
    </header>
  );
}
