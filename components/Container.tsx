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
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-10 ${
        wide ? "max-w-full lg:px-16 2xl:px-24" : "max-w-5xl"
      } ${className}`}
    >
      {children}
    </div>
  );
}