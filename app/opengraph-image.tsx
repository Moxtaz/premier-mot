import { ImageResponse } from "next/og";

export const alt = "Premier Mot : répondez en 1 clic à vos clients";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF7F2",
          color: "#0F1B2D",
          padding: 72,
          borderLeft: "24px solid #C8102E",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 700, display: "flex" }}>
          Premier Mot
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          Répondez en 1 clic aux 10 questions que vos clients vous posent chaque
          jour.
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "#C8102E",
            display: "flex",
          }}
        >
          7 h par mois à récupérer
        </div>
      </div>
    ),
    { ...size }
  );
}
