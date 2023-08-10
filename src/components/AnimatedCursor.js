"use client";

import dynamic from "next/dynamic";

const DynamicAnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const AnimatedCursor = () => {
  return (
    <DynamicAnimatedCursor innerSize={10} outerSize={20} color="6, 130, 151" />
  );
};

export default AnimatedCursor;
