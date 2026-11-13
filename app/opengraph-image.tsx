import { ImageResponse } from "next/og";

export const alt = "uistyles: The UI Style Index";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

/** Static OpenGraph card, prerendered at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          padding: "56px 64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#8a8a8a",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <span>The UI Style Index</span>
          <span>31 styles</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#f2f2f0",
              fontSize: 128,
              lineHeight: 0.92,
              letterSpacing: -4,
              fontStyle: "normal",
            }}
          >
            Every interface
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 28,
              color: "#f2f2f0",
              fontSize: 128,
              lineHeight: 0.92,
              letterSpacing: -4,
            }}
          >
            <span>has an</span>
            <span style={{ fontStyle: "italic", color: "#b9b9b4" }}>accent.</span>
          </div>
        </div>
        <p style={{ color: "#8a8a8a", fontSize: 24, margin: 0 }}>
          uistyles.vercel.app / palette, type and copy-ready Tailwind classes for 31 styles
        </p>
      </div>
    ),
    size,
  );
}
