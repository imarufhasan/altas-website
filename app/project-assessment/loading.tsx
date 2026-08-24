import Container from "@/components/Container";

function Skeleton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`animate-pulse rounded-sm bg-[#252823] ${className}`}
    />
  );
}

export default function Loading() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-bg-alt">
        <Container className="py-20 md:py-28">
          <Skeleton className="h-3 w-40" />

          <Skeleton className="mt-5 h-14 w-full max-w-3xl md:h-20" />

          <Skeleton className="mt-6 h-20 w-full max-w-2xl" />

          <Skeleton className="mt-9 h-12 w-56" />
        </Container>
      </section>

      {/* Domains */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container>
          <Skeleton className="h-10 w-64" />
          <Skeleton className="mt-3 h-px w-10" />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-47.5 w-full"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Evidence */}
      <section className="border-b border-border bg-bg-alt py-20 md:py-24">
        <Container>
          <Skeleton className="h-10 w-64" />

          <Skeleton className="mt-4 h-16 w-full max-w-2xl" />

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="h-3 w-28" />

                <div className="mt-5 space-y-3">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <Skeleton
                      key={j}
                      className="h-10 w-full"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Phases */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container>
          <Skeleton className="h-10 w-full max-w-xl" />

          <Skeleton className="mt-4 h-12 w-full max-w-2xl" />

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-26.25 w-full"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-b border-border bg-bg-alt py-20 md:py-24">
        <Container>
          <Skeleton className="mx-auto h-10 w-full max-w-xl" />
          <Skeleton className="mx-auto mt-5 h-16 w-full max-w-2xl" />
          <Skeleton className="mx-auto mt-8 h-12 w-48" />
        </Container>
      </section>
    </>
  );
}