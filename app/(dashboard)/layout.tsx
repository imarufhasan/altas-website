import { Fragment } from "react/jsx-runtime";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      Dashboard Layout
      {children}
    </Fragment>
  );
}
