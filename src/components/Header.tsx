"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface HeaderProps {
  buttonSrc: string;
  title?: string;
  rightComponent?: React.ReactNode;
}

export default function Header({
  buttonSrc,
  title,
  rightComponent,
}: HeaderProps) {
  const router = useRouter();

  return (
    <header className="w-full h-12">
      <div className="w-full flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="mr-2"
        >
          <Image
            src={buttonSrc}
            alt="버튼"
            width={24}
            height={24}
          />
        </button>
        {title && (
          <h1 className="text-lg font-semibold ">
            {title}
          </h1>
        )}
        {rightComponent && <div>{rightComponent}</div>}
      </div>
    </header>
  );
}
