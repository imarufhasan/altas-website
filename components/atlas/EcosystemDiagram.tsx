// src/components/atlas/EcosystemDiagram.tsx
import type { DiagramNode } from "@/lib/atlas-content";

export default function EcosystemDiagram({ nodes }: { nodes: DiagramNode[] }) {
  return (
    <div className="relative rounded-lg border border-gold/25 bg-bg-alt/40 px-6 py-16 md:px-12 md:py-20">
      <div className="relative mx-auto aspect-video w-full max-w-3xl">
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
        <div className="absolute left-1/2 top-1/2 flex h-20 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-bg shadow-[0_0_24px_-6px_rgba(200,164,93,0.35)] transition-shadow duration-500 hover:shadow-[0_0_32px_-4px_rgba(200,164,93,0.55)] md:h-24 md:w-28">
          <span className="text-sm font-semibold tracking-[0.14em] text-gold">
            ATLAS
          </span>
        </div>

        {nodes.map((node) => (
          <div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-gold/40 bg-bg px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:border-gold hover:text-gold"
            style={{ top: `${node.top}%`, left: `${node.left}%` }}
          >
            {node.label}
          </div>
        ))}
      </div>
    </div>
  );
}