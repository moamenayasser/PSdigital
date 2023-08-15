"use client";

import { useEffect, useState } from "react";

const defaultTarget = typeof window !== "undefined" ? window : null;

const isTrigger = (threshold) => {
  const currentScroll = defaultTarget && defaultTarget.scrollY;

  return currentScroll > threshold;
};

const useScrollTrigger = (threshold = 100) => {
  const [trigger, setTrigger] = useState(() => isTrigger(threshold));

  useEffect(() => {
    const handleScroll = () => {
      setTrigger(isTrigger(threshold));
    };

    handleScroll();
    defaultTarget.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      defaultTarget.removeEventListener("scroll", handleScroll, {
        passive: true,
      });
    };
  }, [isTrigger]);

  return trigger;
};

export default useScrollTrigger;
