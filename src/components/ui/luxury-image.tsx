"use client";

import { images, type ImageKey } from "@/lib/design-tokens";
import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";
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
  priority,
  ...props
}: LuxuryImageProps) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCurrent(src);
    setFailed(false);
    setReady(false);
  }, [src]);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), priority ? 500 : 1500);
    return () => window.clearTimeout(t);
  }, [current, priority]);

  const handleError = () => {
    if (!failed) {
      setFailed(true);
      setCurrent(images[fallbackKey]);
      return;
    }
    setReady(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-charcoal/30",
        fill && "absolute inset-0 h-full w-full",
        aspectClass,
      )}
    >
      <Image
        {...props}
        fill={fill ?? false}
        priority={priority}
        src={current}
        alt={alt}
        className={cn(
          "object-cover transition-opacity duration-700 ease-out",
          ready ? "opacity-100" : "opacity-95",
          !fill && "relative h-full w-full",
          className,
        )}
        onLoad={() => setReady(true)}
        onError={handleError}
        sizes={props.sizes ?? "100vw"}
      />
    </div>
  );
}
