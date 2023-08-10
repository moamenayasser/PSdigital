"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const NextImage = (props) => {
  const { src, alt, width, height, className, ...other } = props;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={clsx(className, {
        "grayscale blur-2xl scale-110": isLoading,
        "grayscale-0 blur-0 scale-100": !isLoading,
      })}
      onLoadingComplete={() => setIsLoading(false)}
      {...other}
    />
  );
};

export default NextImage;
