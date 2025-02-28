export default function HomeHeader() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center items-center">
        <button className="w-full h-[29px] text-center text-[#7168b4] text-lg font-semibold font-['Pretendard'] leading-snug">
          고민중
        </button>
        <button className="w-full h-[29px] text-center text-[#bdbdbd] text-lg font-semibold font-['Pretendard'] leading-snug">
          고민 해결
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full h-[0px] border-2 border-[#7168b4]"></div>
        <div className="w-full h-[0px] border-2 border-[#bdbdbd]"></div>
      </div>
    </div>
  );
}
