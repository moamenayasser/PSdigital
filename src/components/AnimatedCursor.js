"use client";

import dynamic from "next/dynamic";

const DynamicAnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const AnimatedCursor = () => {
  return (
    <DynamicAnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={0}
      outerStyle={{
        backgroundColor: "var(--cursor-color)",
        // mixBlendMode: "exclusion",
      }}
      innerStyle={{
        backgroundColor: "var(--cursorPoint-color)",
      }}
    />
    // <DynamicAnimatedCursor innerSize={10} outerSize={20} color="6, 130, 151" />
  );
};

export default AnimatedCursor;
