"use client";

import { images, type ImageKey } from "@/lib/design-tokens";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type LuxuryImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  fallbackKey?: ImageKey;
  aspectClass?: string;
};

export function LuxuryImage({
  src,
  alt,
  fallbackKey = "heroLobby",
  className,
  aspectClass,
  fill,
  ...props
}: LuxuryImageProps) {
  const [current, setCurrent] = useState(src);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-charcoal", aspectClass)}>
      <div
        className={cn(
          "absolute inset-0 bg-charcoal transition-opacity duration-700",
          loaded ? "opacity-0" : "opacity-100",
        )}
        aria-hidden
      />
      <Image
        {...props}
        fill={fill}
        src={current}
        alt={alt}
        className={cn(
          "object-cover transition-opacity duration-1000 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setCurrent(images[fallbackKey]);
          setLoaded(false);
        }}
        sizes={props.sizes ?? "100vw"}
      />
    </div>
  );
}
