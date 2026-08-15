import { ImageResponse } from "next/og"

export const dynamic = "force-static"

export const alt = "Packages by Chris Thapa — Open Source Libraries for JS/TS & Flutter"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fafafa",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#111111",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#111111",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fafafa",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            CT
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: "#111111",
              letterSpacing: "-0.02em",
            }}
          >
            Packages by Chris Thapa
          </div>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: "#111111",
            letterSpacing: "-0.03em",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Open Source Libraries for JS/TS &amp; Flutter
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: 24,
            color: "#666666",
            textAlign: "center",
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          Bikram Sambat date tools · React date picker · Dart &amp; Flutter extensions · Vedic astrology charts
        </div>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "12px",
          }}
        >
          {["TypeScript", "React", "Dart", "Flutter"].map((s) => (
            <div
              key={s}
              style={{
                border: "1.5px solid #d4d4d4",
                borderRadius: 999,
                padding: "8px 18px",
                fontSize: 18,
                color: "#444444",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
