// FILE PATH: app/loading.tsx

import Container from "@/components/Container";
import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="relative overflow-hidden border-b border-border bg-[#0d0f0e]">
        <Container
          className="
            relative z-10
            grid grid-cols-1 items-center
            gap-12
            py-12
            sm:py-16
            md:gap-14 md:py-20
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-16
            lg:py-14
            xl:gap-20
          "
        >
          {/* Left */}
          <div className="max-w-2xl">
            {/* Logo */}
            <Skeleton className="h-24 w-65 sm:h-26 sm:w-70 md:h-28 md:w-75 lg:h-30 lg:w-[320px] xl:w-85" />

            {/* Label */}
            <Skeleton className="mt-10 h-3 w-64" />

            {/* Heading */}
            <Skeleton className="mt-5 h-11 w-full max-w-xl sm:h-13 md:h-15 lg:h-16" />
            <Skeleton className="mt-2 h-11 w-3/4 max-w-md sm:h-13 md:h-15 lg:h-16" />

            {/* Description */}
            <Skeleton className="mt-6 h-4 w-full max-w-xl" />
            <Skeleton className="mt-2 h-4 w-11/12 max-w-xl" />
            <Skeleton className="mt-2 h-4 w-4/5 max-w-lg" />
            <Skeleton className="mt-2 h-4 w-2/3 max-w-md" />

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Skeleton className="h-12 w-full sm:w-40" />
              <Skeleton className="h-12 w-full sm:w-64" />
            </div>
          </div>

          {/* Right framework card */}
          <div
            className="
              relative
              w-full
              max-w-md
              justify-self-center
              border
              border-[#46483f]
              bg-[#1a1d1a]/95
              p-5
              sm:p-6
              lg:max-w-90
              xl:max-w-95
            "
          >
            <div className="pointer-events-none absolute inset-1 border border-[#30332d]" />

            <div className="relative">
              <Skeleton className="h-3 w-32" />

              <Skeleton className="mt-4 h-7 w-64" />
              <Skeleton className="mt-2 h-7 w-48" />

              <div className="mt-5 h-px w-full bg-[#3a3c35]" />

              <ul className="mt-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 border-b border-[#3a3c35] py-3.5 sm:gap-3.5 sm:py-4"
                  >
                    <Skeleton className="mt-0.5 h-4 w-4 shrink-0 rounded-sm" />

                    <div className="w-full">
                      <Skeleton className="h-3 w-32" />
                      <Skeleton className="mt-2 h-3 w-40" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars skeleton */}
      <section className="border-b border-border bg-bg py-22 md:py-23">
        <Container>
          <div className="mx-auto max-w-212.5 text-center">
            <Skeleton className="mx-auto h-10 w-2/3 max-w-xl" />

            <Skeleton className="mx-auto mt-6 h-4 w-full max-w-200" />
            <Skeleton className="mx-auto mt-2 h-4 w-3/4 max-w-xl" />
          </div>

          <div className="mt-17.5 grid grid-cols-1 gap-7 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-sm border border-border bg-card p-7"
              >
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

      {/* Project Drift skeleton */}
      <section className="border-b border-border bg-bg-alt py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Skeleton className="h-3 w-28" />
            <Skeleton className="mt-3 h-10 w-full max-w-xl" />
            <Skeleton className="mt-5 h-4 w-full max-w-xl" />
            <Skeleton className="mt-2 h-4 w-11/12 max-w-xl" />
            <Skeleton className="mt-2 h-4 w-4/5 max-w-lg" />

            <Skeleton className="mt-8 h-11 w-52" />
          </div>

          <div className="divide-y divide-border">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="py-5 first:pt-0">
                <Skeleton className="h-3 w-36" />
                <Skeleton className="mt-3 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-11/12" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Delivery confidence skeleton */}
      <section className="border-b border-border bg-bg py-24">
        <Container>
          <Skeleton className="mx-auto h-10 w-80 max-w-full" />

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-sm border border-border bg-bg-alt px-6 py-8"
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <Skeleton className="h-3 w-28" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Insights skeleton */}
      <section className="border-b border-border bg-bg py-24">
        <Container>
          <div className="flex items-end justify-between">
            <Skeleton className="h-10 w-52" />
            <Skeleton className="h-4 w-20" />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-sm border border-border bg-card"
              >
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

      {/* CTA skeleton */}
      <section className="bg-bg-alt py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Skeleton className="mx-auto h-10 w-3/4" />
            <Skeleton className="mx-auto mt-5 h-4 w-full max-w-2xl" />
            <Skeleton className="mx-auto mt-2 h-4 w-4/5 max-w-xl" />
            <Skeleton className="mx-auto mt-8 h-11 w-48" />
          </div>
        </Container>
      </section>
    </>
  );
}
