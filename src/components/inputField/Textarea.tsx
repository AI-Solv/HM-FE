import React from "react";

interface TextareaProps {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export default function Textarea({
  label,
  placeholder,
  value,
  onChange,
}: TextareaProps) {
  return (
    <div className="w-full mt-3 mb-4">
      {label && (
        <label className="text-[#424242] text-base font-medium font-['Pretendard'] leading-tight block mb-2">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-[9px] pt-4 pb-[15px] rounded-[10px] border border-[#d3d3d3] justify-center items-start gap-2 inline-flex text-[#898989] font-medium font-['Pretendard'] leading-tight"
        style={{
          height: "270px",
          resize: "none",
        }}
      />
    </div>
  );
}
