import Container from "@/components/Container";

function SkeletonBlock({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        animate-pulse
        rounded-sm
        bg-[#242720]
        ${className}
      `}
    />
  );
}

export default function ProjectDriftLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="border-b border-border bg-bg-alt">
        <Container className="py-20 md:py-28">
          <SkeletonBlock className="h-4 w-40" />

          <SkeletonBlock className="mt-5 h-14 w-full max-w-3xl md:h-16" />

          <SkeletonBlock className="mt-3 h-14 w-3/4 max-w-2xl md:h-16" />

          <SkeletonBlock className="mt-7 h-5 w-full max-w-2xl" />
          <SkeletonBlock className="mt-3 h-5 w-5/6 max-w-xl" />

          <SkeletonBlock className="mt-9 h-11 w-56" />
        </Container>
      </section>

      {/* What Project Drift Reveals */}
      <section className="border-b border-border bg-bg py-20 sm:py-24">
        <Container>
          <SkeletonBlock className="h-10 w-80 max-w-full" />

          <SkeletonBlock className="mt-5 h-5 w-full max-w-2xl" />
          <SkeletonBlock className="mt-3 h-5 w-5/6 max-w-xl" />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonBlock
                key={i}
                className="h-48 w-full"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Reported vs Evidence */}
      <section className="border-b border-border bg-bg-alt py-20 sm:py-24">
        <Container>
          <SkeletonBlock className="mx-auto h-10 w-full max-w-2xl" />

          <div className="mt-14 grid grid-cols-1 gap-8 rounded-sm border border-border bg-card p-6 sm:p-8 md:grid-cols-2 md:p-12">
            <div>
              <SkeletonBlock className="h-4 w-20" />
              <SkeletonBlock className="mt-4 h-8 w-64" />

              <div className="mt-8 space-y-7">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i}>
                    <SkeletonBlock className="h-4 w-40" />
                    <SkeletonBlock className="mt-2 h-4 w-full" />
                    <SkeletonBlock className="mt-2 h-4 w-5/6" />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <SkeletonBlock className="h-4 w-20" />
              <SkeletonBlock className="mt-4 h-8 w-72 max-w-full" />

              <div className="mt-8 space-y-7">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i}>
                    <SkeletonBlock className="h-4 w-44" />
                    <SkeletonBlock className="mt-2 h-4 w-full" />
                    <SkeletonBlock className="mt-2 h-4 w-5/6" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Indicators */}
      <section className="border-b border-border bg-bg py-20 sm:py-24">
        <Container>
          <SkeletonBlock className="h-10 w-96 max-w-full" />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-t border-border px-2 py-6">
                <SkeletonBlock className="h-6 w-48" />
                <SkeletonBlock className="mt-4 h-4 w-full" />
                <SkeletonBlock className="mt-2 h-4 w-11/12" />
                <SkeletonBlock className="mt-2 h-4 w-4/5" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Early Detection */}
      <section className="border-b border-border bg-bg-alt py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SkeletonBlock className="h-4 w-48" />
          <SkeletonBlock className="mt-4 h-10 w-72 max-w-full" />

          <SkeletonBlock className="mt-6 h-5 w-full" />
          <SkeletonBlock className="mt-3 h-5 w-11/12" />
          <SkeletonBlock className="mt-3 h-5 w-4/5" />

          <SkeletonBlock className="mt-6 h-5 w-full" />
          <SkeletonBlock className="mt-3 h-5 w-11/12" />
          <SkeletonBlock className="mt-3 h-5 w-5/6" />
        </Container>
      </section>

      {/* CTA skeleton */}
      <section className="bg-bg py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SkeletonBlock className="mx-auto h-10 w-80 max-w-full" />
            <SkeletonBlock className="mx-auto mt-5 h-5 w-full max-w-2xl" />
            <SkeletonBlock className="mx-auto mt-8 h-11 w-48" />
          </div>
        </Container>
      </section>
    </>
  );
}