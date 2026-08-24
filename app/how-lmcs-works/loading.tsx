import Container from "@/components/Container";

function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-sm bg-[#252823] ${className}`} />
  );
}

export default function Loading() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-bg-alt">
        <Container className="py-20 md:py-28">
          <Skeleton className="h-3 w-40" />

          <Skeleton className="mt-5 h-12 w-full max-w-3xl md:h-16" />

          <Skeleton className="mt-6 h-20 w-full max-w-2xl" />

          <Skeleton className="mt-9 h-12 w-56" />
        </Container>
      </section>

      {/* Observation */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
            <Skeleton className="h-14 w-full max-w-xl" />

            <Skeleton className="h-24 w-full" />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-[190px] w-full" />
            ))}
          </div>
        </Container>
      </section>

      {/* Domains */}
      <section className="border-b border-border bg-bg-alt py-20 md:py-24">
        <Container>
          <Skeleton className="mx-auto h-10 w-72" />

          <Skeleton className="mx-auto mt-5 h-5 w-full max-w-xl" />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-52.5 w-full" />
            ))}
          </div>
        </Container>
      </section>

      {/* Evidence */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <Skeleton className="h-3 w-48" />

              <Skeleton className="mt-4 h-12 w-full max-w-xl" />

              <Skeleton className="mt-5 h-28 w-full max-w-md" />
            </div>

            <Skeleton className="h-32 w-full" />
          </div>

          {/* Lifecycle */}
          <Skeleton className="mt-12 h-56 w-full lg:mt-14" />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-bg-alt py-20 md:py-24">
        <Container>
          <Skeleton className="mx-auto h-10 w-full max-w-xl" />

          <Skeleton className="mx-auto mt-5 h-16 w-full max-w-2xl" />

          <Skeleton className="mx-auto mt-8 h-12 w-48" />
        </Container>
      </section>
    </>
  );
}
