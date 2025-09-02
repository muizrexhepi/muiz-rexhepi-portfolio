"use client";

import { useRef, FC } from "react";

const AnimatedBackground: FC = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  return <div ref={backgroundRef} className="animated-gradient-background" />;
};

export default AnimatedBackground;
