interface ModalButtonProps {
  label: string;
  onClick?: () => void;
}

export default function ModalButton({
  label,
  onClick,
}: ModalButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        label === "아니요"
          ? "bg-[#f5f5f5] text-[#757575]"
          : "bg-[#6b60be] text-white"
      } w-full h-10 px-4 py-2.5 mt-4 rounded-[9px] flex justify-center items-center gap-2 font-medium font-['Pretendard']`}
    >
      {label}
    </button>
  );
}
