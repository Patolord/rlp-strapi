"use client";

import { LinkProps, LogoProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StrapiImage } from "../strapi-image";

interface HeaderProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    cta: LinkProps;
  };
}

export default function Header({ data }: HeaderProps) {
  const pathname = usePathname();

  //active link
  const activeLink = (href: string) => {
    return pathname === href ? "underline " : "";
  };

  if (!data) return;

  const { logo, navigation, cta } = data;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <StrapiImage
            src={logo.image.url}
            alt={logo.logoText || "RLP Engenharia"}
            width={120}
            height={120}
          />
          <div className="text-blue-600 font-serif text-xl">
            {logo.logoText}
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 font-sans">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-gray-600 hover:underline ${activeLink(
                item.href
              )}`}
              target={item.isExternal ? "_blank" : "_self"}
            >
              {item.text}
            </Link>
          ))}
        </nav>
        <Link
          href={cta.href}
          target={cta.isExternal ? "_blank" : "_self"}
          className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors"
        >
          {cta.text}
        </Link>
      </div>
    </header>
  );
}
