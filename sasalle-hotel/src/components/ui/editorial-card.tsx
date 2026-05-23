import Image from "next/image";
import { cn } from "@/lib/utils";

export function EditorialCard({
  image,
  imageAlt,
  tag,
  title,
  body,
  offset = false,
}: {
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
  body: string;
  offset?: boolean;
}) {
  return (
    <article
      className={cn(
        "overflow-hidden border border-outline-variant/10 bg-surface-container-lowest",
        offset && "stair-offset-even",
      )}
    >
      <div className="group relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-8">
        <span className="font-label-caps mb-2 block text-secondary">{tag}</span>
        <h4 className="font-display mb-4 text-[24px] text-primary">{title}</h4>
        <p className="text-body-md text-on-surface-variant">{body}</p>
      </div>
    </article>
  );
}
