import Header from "@/components/Header";
import { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full p-6">
      <Header buttonSrc="/icons/Back_Button.png" />
      {children}
    </div>
  );
}
