export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  external?: boolean;
  available?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/username",
    handle: "@username",
    external: true,
    available: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/username",
    handle: "/in/username",
    external: true,
    available: true,
  },
  {
    label: "E-mail",
    href: "mailto:hello@example.com",
    handle: "hello@example.com",
    available: true,
  },
  {
    label: "CV",
    href: "",
    handle: "na vyžádání",
    available: false,
  },
];
