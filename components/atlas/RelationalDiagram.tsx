// src/components/atlas/RelationalDiagram.tsx
import type { DiagramNode } from "@/lib/atlas-content";

export default function RelationalDiagram({ nodes }: { nodes: DiagramNode[] }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-140">
      <style>{`
        @keyframes atlas-pulse-ring {
          0%   { transform: scale(0.92); opacity: 0.55; }
          70%  { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        @keyframes atlas-dash-flow {
          to { stroke-dashoffset: -20; }
        }
        @keyframes atlas-hex-glow {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(200,164,93,0.35)); }
          50%      { filter: drop-shadow(0 0 16px rgba(200,164,93,0.65)); }
        }
        .atlas-diagram-line {
          animation: atlas-dash-flow 3.5s linear infinite;
        }
        .atlas-diagram-hex {
          animation: atlas-hex-glow 3.5s ease-in-out infinite;
        }
        .atlas-diagram-ring {
          animation: atlas-pulse-ring 2.8s ease-out infinite;
        }
      `}</style>

      {/* Connecting lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {nodes.map((node, i) => (
          <line
            key={node.label}
            x1={50}
            y1={50}
            x2={node.left}
            y2={node.top}
            stroke="#C8A45D"
            strokeOpacity={0.35}
            strokeWidth={0.25}
            strokeDasharray="1.2 2"
            className="atlas-diagram-line"
            style={{ animationDelay: `${i * 120}ms` }}
          />
        ))}
      </svg>

      {/* Center node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="atlas-diagram-ring absolute inset-0 rounded-full border border-gold/60" />
        <div
          className="atlas-diagram-hex relative flex h-16 w-16 items-center justify-center border border-gold bg-bg-alt text-[11px] font-semibold tracking-widest text-gold md:h-18 md:w-18"
          style={{
            clipPath:
              "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
          }}
        >
          ATLAS
        </div>
      </div>

      {/* Data-domain nodes */}
      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm border border-border bg-bg-alt px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted shadow-[0_0_0_1px_rgba(0,0,0,0)] transition-colors hover:border-gold/60 hover:text-gold"
          style={{ top: `${node.top}%`, left: `${node.left}%` }}
        >
          {node.dot && <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-gold align-middle" />}
          {node.label}
        </div>
      ))}
    </div>
  );
}