import type { ReactNode } from "react";

export const metadata = {
  title: "Premier Mot",
  description: "Répondez en 1 clic aux questions que vos clients vous posent chaque jour.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
