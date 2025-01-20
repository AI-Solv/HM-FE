"use client";

import { useEffect } from "react";
import setScreenHeight from "../utils/mobileScreenSize/setScreenHeight";

export default function ScreenHeightSetter() {
  useEffect(() => {
    setScreenHeight();

    window.addEventListener("resize", setScreenHeight);
    return () => {
      window.removeEventListener("resize", setScreenHeight);
    };
  }, []);
  return null;
}
