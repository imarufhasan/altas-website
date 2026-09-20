// FILE PATH: components/home/AcademyCard.tsx

import Icon from "@/components/Icon";
import type { IconName } from "@/lib/api";

export default function AcademyCard({
  icon,
  title,
  description,
}: {
  icon: IconName;
  title: string;
  description: string;
}) {
  return (
    <article className="h-full border border-[#4a463c] bg-[#1b1e1b] p-9 transition-colors duration-300 hover:border-gold/70">
      <div className="flex h-12 w-12 items-center justify-center border border-[#4a463c] bg-[#151714]">
        <Icon name={icon} className="h-5 w-5 text-gold" strokeWidth={1.7} />
      </div>

      <h3 className="mt-8 max-w-72 font-serif text-[27px] leading-[1.2] text-cream">
        {title}
      </h3>

      <p className="mt-5 text-[14px] leading-[1.65] text-[#c0bdb3]">
        {description}
      </p>
    </article>
  );
}