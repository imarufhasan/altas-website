export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-gold">
      {children}
    </p>
  );
}
