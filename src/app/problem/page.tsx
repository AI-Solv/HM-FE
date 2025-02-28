import BottomNav from "@/components/BottomNav";
import HomeHeader from "@/containers/problem/HomeHeader";
import ProblemItem from "@/containers/problem/ProblemItem";
import Image from "next/image";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return (
    <div className="w-full mt-14">
      <HomeHeader />
      <div className="flex items-center gap-2 mt-6 mx-6">
        <div className="text-black text-lg font-normal font-['Pretendard'] ml-1">
          전체
        </div>
        <div className="text-[#6b60be] text-xl font-bold font-['Pretendard']">
          03
        </div>
        <button className="absolute right-6">
          <Image
            src={`/icons/Filter_Button.png`}
            alt="필터버튼"
            width={45}
            height={45}
          />
        </button>
      </div>
      <div className="m-6">
        <ProblemItem
          id={1}
          title="고민 제목"
          category="고민 카테고리"
        />
        <ProblemItem
          id={2}
          title="고민 제목"
          category="고민 카테고리"
        />
        <ProblemItem
          id={3}
          title="고민 제목"
          category="고민 카테고리"
        />
      </div>
      {/* <div>고민 홈페이지 : {q}</div> */}
      <BottomNav url="problem" />
    </div>
  );
}
