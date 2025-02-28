"use client";

import Button from "@/components/button/Button";
import ImageExplanation from "@/components/ImageExplanation";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/login");
  };

  return (
    <div className="w-full">
      <ImageExplanation />
      <div className="p-6">
        <Button label="시작하기" onClick={handleNavigate} />
      </div>
    </div>
  );
}
