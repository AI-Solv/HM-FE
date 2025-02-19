import React from "react";

interface CheckboxProps {
  type: "plain" | "link";
  label: string;
  checked: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  linkHref?: string;
}

export default function Checkbox({
  type,
  label,
  checked,
  onChange,
  linkHref,
}: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="checkbox"
        id={label}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <label
        htmlFor={label}
        className="flex items-center text-sm text-gray-700 font-normal"
      >
        <div className="w-[22px] h-[22px] relative mr-2">
          <div
            className={`w-[22px] h-[22px] left-0 top-0 absolute rounded border border-[#d3d3d3] ${
              checked ? "bg-[#6b60be]" : "bg-white"
            }`}
          ></div>
        </div>
        {type === "link" ? (
          <a
            href={linkHref}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            <div className="flex">
              <span className="text-[#111111] text-base font-semibold font-['Pretendard'] leading-tight mr-2">
                [필수]
              </span>
              <span>{label}</span>
            </div>
          </a>
        ) : (
          <div className="flex">
            <span className="text-[#111111] text-base font-semibold font-['Pretendard'] leading-tight mr-2">
              [필수]
            </span>
            <span>{label}</span>
          </div>
        )}
      </label>
    </div>
  );
}
