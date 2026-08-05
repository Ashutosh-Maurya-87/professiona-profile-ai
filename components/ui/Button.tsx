import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`rounded-full px-6 py-3 transition ${
        variant === "primary"
          ? "bg-white text-black"
          : "border border-white text-white"
      }`}
    >
      {children}
    </Link>
  );
}