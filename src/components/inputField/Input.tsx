import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  errorMessage?: string;
  rightComponent?: React.ReactNode;
}

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  errorMessage,
  rightComponent,
}: InputProps) {
  return (
    <div className="w-full mt-3">
      {label && (
        <label className="text-[#222222] text-base font-normal font-['Pretendard'] block mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errorMessage
              ? "border-red-500 focus:ring-2 focus:ring-red-500"
              : ""
          }}`}
        />
        {rightComponent && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {rightComponent}
          </div>
        )}
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
