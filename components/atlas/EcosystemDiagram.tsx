// src/components/atlas/EcosystemDiagram.tsx
import type { DiagramNode } from "@/lib/atlas-content";
import { ecosystemCenter } from "@/lib/atlas-content";

export default function EcosystemDiagram({ nodes }: { nodes: DiagramNode[] }) {
  return (
    <div className="relative rounded-lg border border-gold/25 bg-bg-alt/40 px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20">
      <div className="relative mx-auto aspect-square w-full max-w-3xl sm:aspect-video">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {nodes.map((node) => (
            <line
              key={node.label}
              x1={50}
              y1={50}
              x2={node.left}
              y2={node.top}
              stroke="#8a8578"
              strokeOpacity={0.35}
              strokeWidth={0.2}
            />
          ))}
        </svg>

        {/* Center node */}
        <div className="absolute left-1/2 top-1/2 flex h-16 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-md border border-border bg-bg px-2 text-center shadow-[0_0_24px_-6px_rgba(200,164,93,0.35)] transition-shadow duration-500 hover:shadow-[0_0_32px_-4px_rgba(200,164,93,0.55)] sm:h-20 sm:w-24 md:h-24 md:w-28">
          <span className="text-xs font-semibold tracking-[0.14em] text-gold sm:text-sm">
            {ecosystemCenter.label}
          </span>
          <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-muted sm:text-[9px]">
            {ecosystemCenter.sublabel}
          </span>
        </div>

        {nodes.map((node) => (
          <div
            key={node.label}
            className="absolute w-[38%] max-w-40 -translate-x-1/2 -translate-y-1/2 text-balance rounded-full border border-gold/40 bg-bg px-2.5 py-1.5 text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-cream transition-colors hover:border-gold hover:text-gold sm:w-auto sm:max-w-none sm:whitespace-nowrap sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.12em]"
            style={{ top: `${node.top}%`, left: `${node.left}%` }}
          >
            {node.label}
          </div>
        ))}
      </div>
    </div>
  );
}
