export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  status: string;
  href?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    year: "2026",
    status: "placeholder k nahrazeni",
    href: "https://example.com/certificates/google-cybersecurity",
  },
  {
    title: "ISC2 Certified in Cybersecurity",
    issuer: "ISC2",
    year: "2026",
    status: "placeholder k nahrazeni",
    href: "https://example.com/certificates/isc2-cc",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2026",
    status: "placeholder k nahrazeni",
    href: "https://example.com/certificates/javascript-algorithms",
  },
];
