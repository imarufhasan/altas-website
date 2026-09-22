// type ContainerProps = {
//   children: React.ReactNode;
//   className?: string;
//   wide?: boolean;
// };

// export default function Container({
//   children,
//   className = "",
//   wide = false,
// }: ContainerProps) {
//   return (
//     <div
//       className={`mx-auto w-full px-6 sm:px-10 ${
//         wide ? "max-w-full lg:px-16 2xl:px-24" : "max-w-5xl"
//       } ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
};

export default function Container({
  children,
  className = "",
  wide = false,
}: ContainerProps) {
  // If the caller passes its own max-w-* in className (e.g. max-w-6xl),
  // don't also apply the default max-w-5xl — the two used to fight each
  // other and Tailwind would pick one unpredictably, which is why some
  // sections ended up narrower than intended.
  const hasCustomWidth = /(^|\s)max-w-/.test(className);

  const widthClass = wide
    ? "max-w-full lg:px-16 2xl:px-24"
    : hasCustomWidth
      ? ""
      : "max-w-5xl";

  return (
    <div className={`mx-auto w-full px-6 sm:px-10 ${widthClass} ${className}`}>
      {children}
    </div>
  );
}
