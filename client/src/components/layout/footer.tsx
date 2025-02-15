import type { LinkProps, LogoProps } from "@/types";

import Link from "next/link";
import { StrapiImage } from "../strapi-image";

interface FooterProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    policies: LinkProps[];
    copy: string;
  };
}

export function Footer({ data }: FooterProps) {
  if (!data) return null;

  const { logo, navigation, policies, copy } = data;
  return (
    <footer className="bg-primary text-white py-2">
      <nav className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <StrapiImage
          src={logo.image.url}
          alt={logo.image.alternativeText || "No alternative text"}
          width={100}
          height={100}
        />
        <ul className="flex flex-wrap justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                target={item.isExternal ? "_blank" : "_self"}
              >
                <h5 className="text-white hover:text-gray-200">{item.text}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="container mx-auto px-4 border-t border-white/20 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <ul className="flex flex-wrap justify-center gap-4">
            {policies.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  className="text-sm text-white/80 hover:text-white "
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} {copy}
          </p>
        </div>
      </div>
    </footer>
  );
}
