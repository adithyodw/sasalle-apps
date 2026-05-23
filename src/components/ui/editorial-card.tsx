import { LuxuryImage } from "@/components/ui/luxury-image";
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
    <article className={cn("group", offset && "md:mt-20")}>
      <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
        <LuxuryImage
          src={image}
          alt={imageAlt}
          fill
          className="luxury-transition group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
      <div className="pt-8">
        <span className="font-label-caps text-gold">{tag}</span>
        <h4 className="font-editorial mt-3 text-[28px] text-charcoal">{title}</h4>
        <p className="mt-4 max-w-sm text-[15px] leading-[1.75] text-on-surface-variant">
          {body}
        </p>
      </div>
    </article>
  );
}
