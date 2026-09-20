// FILE PATH: components/home/DomainCardHome.tsx

import Icon from "@/components/Icon";
import type { IconName } from "@/lib/api";

export default function DomainCardHome({
  icon,
  title,
  description,
}: {
  icon: IconName;
  title: string;
  description: string;
}) {
  return (
    // NOTE: the parent <Link className="group"> drives group-hover / group-focus-visible
    <article
      className="
        flex
        h-full
        min-h-86
        flex-col
        rounded-[10px]
        border
        border-[#3d3d35]
        bg-[#111411]
        p-9
        transition-colors
        duration-300
        hover:border-[#c9a45b]
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-[10px]
          border
          border-[#4a493f]
          bg-[#151714]
        "
      >
        <Icon name={icon} className="h-5 w-5 text-gold" strokeWidth={1.7} />
      </div>

      {/* Title */}
      <h3
        className="
          mt-7
          font-serif
          text-[27px]
          leading-[1.15]
          text-cream
          transition-colors
          duration-300
          group-hover:text-gold-light
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 max-w-72 text-[14px] leading-[1.65] text-[#c0bdb3]">
        {description}
      </p>

      {/* View link: always visible on touch, reveals on hover for desktop */}
      <span
        aria-hidden
        className="
          mt-auto
          self-end
          pt-6
          text-[12px]
          font-semibold
          uppercase
          tracking-[0.12em]
          text-gold
          opacity-100
          transition-opacity
          duration-300
          md:opacity-0
          md:group-hover:opacity-100
          md:group-focus-visible:opacity-100
        "
      >
        View →
      </span>
    </article>
  );
}
