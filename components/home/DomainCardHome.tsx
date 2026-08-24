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
    <article
      className="
        group
        h-70
        rounded-[9px]
        border
        border-[#3d3d35]
        bg-[#111411]
        px-9
        py-9
        transition-colors
        duration-300
        hover:border-[#c9a45b]
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-[9px]
          border
          border-[#4a493f]
          bg-[#151714]
        "
      >
        <Icon
          name={icon}
          className="h-4.75 w-4.75 text-gold"
          strokeWidth={1.7}
        />
      </div>

      {/* Title */}
      <h3
        className="
          mt-8
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
      <p
        className="
          mt-5
          max-w-67.5
          text-[14px]
          leading-[1.65]
          text-[#c0bdb3]
        "
      >
        {description}
      </p>
    </article>
  );
}