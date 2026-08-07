import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  bgColor?: string;
  textColor?: string;
}

export default function LinkButton({
  href,
  children,
  icon,
  bgColor = "bg-[#18181b]",
  textColor = "text-white",
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex w-max shadow-2xl items-center gap-3 px-7 py-3 rounded-full font-medium transition-transform hover:opacity-90 active:scale-95 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="flex items-center justify-center">{icon}</span>}
    </Link>
  );
}
