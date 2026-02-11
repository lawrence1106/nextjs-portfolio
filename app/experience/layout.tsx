import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and roles.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
