import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description: "Frontend Engineer specializing in modern React applications.",
};

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
