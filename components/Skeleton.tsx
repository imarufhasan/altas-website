// FILE PATH: components/Skeleton.tsx
//
// Base shimmer block. Every skeleton shape in loading.tsx is built out of this.

export default function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-sm bg-white/[0.06] ${className}`}
      aria-hidden="true"
    />
  );
}
