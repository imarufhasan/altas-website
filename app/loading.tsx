import Container from "@/components/Container";
import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="border-b border-border bg-bg py-20 md:py-28">
        <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Skeleton className="h-3 w-56" />
            <Skeleton className="mt-5 h-14 w-full max-w-md" />
            <Skeleton className="mt-3 h-14 w-3/4 max-w-sm" />
            <Skeleton className="mt-6 h-4 w-full max-w-lg" />
            <Skeleton className="mt-2 h-4 w-11/12 max-w-lg" />
            <Skeleton className="mt-2 h-4 w-2/3 max-w-md" />
            <div className="mt-9 flex gap-4">
              <Skeleton className="h-12 w-56" />
              <Skeleton className="h-12 w-48" />
            </div>
          </div>

          <div className="rounded-sm border border-border bg-card p-8">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="mt-3 h-6 w-56" />
            <ul className="mt-6 space-y-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Skeleton className="h-6 w-6 shrink-0 rounded-sm" />
                  <div className="w-full">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="mt-2 h-3 w-40" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Pillars skeleton */}
      <section className="border-b border-border bg-bg py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Skeleton className="mx-auto h-9 w-2/3" />
            <Skeleton className="mx-auto mt-4 h-4 w-full max-w-xl" />
            <Skeleton className="mx-auto mt-2 h-4 w-3/4 max-w-md" />
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-sm border border-border bg-card p-7">
                <Skeleton className="h-11 w-11 rounded-sm" />
                <Skeleton className="mt-5 h-6 w-40" />
                <Skeleton className="mt-3 h-3 w-full" />
                <Skeleton className="mt-2 h-3 w-full" />
                <Skeleton className="mt-2 h-3 w-2/3" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Domains skeleton */}
      <section className="border-b border-border bg-bg py-24">
        <Container>
          <Skeleton className="h-3 w-28" />
          <Skeleton className="mt-3 h-9 w-full max-w-xl" />
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="h-6 w-32" />
                <Skeleton className="mt-3 h-3 w-full" />
                <Skeleton className="mt-2 h-3 w-full" />
                <Skeleton className="mt-2 h-3 w-2/3" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Insights skeleton */}
      <section className="bg-bg py-24">
        <Container>
          <div className="flex items-end justify-between">
            <Skeleton className="h-9 w-52" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-sm border border-border bg-card">
                <Skeleton className="h-45 w-full rounded-none" />
                <div className="p-6">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="mt-4 h-5 w-3/4" />
                  <Skeleton className="mt-2 h-3 w-full" />
                  <Skeleton className="mt-2 h-3 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}