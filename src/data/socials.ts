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
    href: "https://github.com/Lilleykuba",
    handle: "@Lilleykuba",
    external: true,
    available: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jakub-lilley",
    handle: "/in/jakub-lilley",
    external: true,
    available: true,
  },
  {
    label: "E-mail",
    href: "mailto:jakub.lilley@gmail.com",
    handle: "jakub.lilley@gmail.com",
    available: true,
  },
  {
    label: "CV",
    href: "/jakubcv.pdf",
    handle: "pdf k nahlednuti",
    available: true,
  },
];
