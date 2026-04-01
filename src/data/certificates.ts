export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  status: string;
  href?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Cybersecurity 101",
    issuer: "TryHackMe",
    year: "2025",
    status: "completed",
    href: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-MY57TWTWKA.pdf",
  },
  {
    title: "Jr Penetration Tester",
    issuer: "TryHackMe",
    year: "2026",
    status: "completed",
    href: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CSZYTWLCW4.pdf",
  },
  {
    title: "JavaScript Algorithms and Data structures",
    issuer: "FreeCodeCamp",
    year: "2023",
    status: "completed",
    href: "https://freecodecamp.org/certification/camobeast/javascript-algorithms-and-data-structures",
  },
];
