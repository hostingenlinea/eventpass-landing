"use client";
import { useState } from "react";

const TIERS = [
  { qty: 50,   label: "50",    price: 500 },
  { qty: 100,  label: "100",   price: 430 },
  { qty: 250,  label: "250",   price: 370 },
  { qty: 500,  label: "500",   price: 320 },
  { qty: 1000, label: "1.000", price: 290 },
  { qty: 2000, label: "2.000", price: 265 },
  { qty: 3000, label: "3.000+",price: 252 },
];
const MAX_PRICE = TIERS[0].price;

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString("es-AR");
}

export default function Calculator() {
  const [idx, setIdx] = useState(6);
  const tier = TIERS[idx];
  const disc = Math.round((1 - tier.price / MAX_PRICE) * 100);
  const total = tier.price * tier.qty;
  const pct = (idx / (TIERS.length - 1)) * 100;

  return (
    <section id="precios" className="max-w-6xl mx-auto px-5" style={{ paddingTop: 0, paddingBottom: 100 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--pink)", marginBottom: 12 }}>Calculadora</p>
      <h2 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(32px,4vw,54px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-.025em", marginBottom: 16 }}>
        Cuántas más entradas,<br />más barato sale cada una.
      </h2>
      <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.7, maxWidth: 540, marginBottom: 52 }}>
        Mové el slider y ves cómo baja el precio por entrada según el volumen de tu evento.
      </p>

      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 22, padding: 40 }}>
        {/* Results */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }} className="calc-top">
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 14, padding: "20px 22px" }}>
            <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 6, fontWeight: 500 }}>Precio por entrada</div>
            <div style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 38, fontWeight: 700, lineHeight: 1, color: "var(--pink)" }}>{fmt(tier.price)}</div>
            <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 5 }}>
              Antes{" "}<s style={{ color: "var(--muted)" }}>{fmt(MAX_PRICE)}</s>{" "}
              <span style={{ display: "inline-block", background: "var(--pink)", color: "#fff", fontSize: 10, fontWeight: 700, padding: "1px 7px", borderRadius: 100, marginLeft: 4 }}>{disc}% OFF</span>
            </div>
          </div>
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 14, padding: "20px 22px" }}>
            <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 6, fontWeight: 500 }}>Costo total</div>
            <div style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 38, fontWeight: 700, lineHeight: 1, color: "var(--cyan)" }}>{fmt(total)}</div>
            <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 5 }}>para {tier.label} entradas</div>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px dashed rgba(255,255,255,.07)", margin: "0 0 28px" }} />

        {/* Slider */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
          <span style={{ fontSize: 13, color: "var(--muted)" }}>Cantidad de entradas</span>
          <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 26, fontWeight: 700, color: "var(--snow)" }}>{tier.label}</span>
        </div>

        <input
          type="range"
          min={0}
          max={TIERS.length - 1}
          step={1}
          value={idx}
          onChange={e => setIdx(Number(e.target.value))}
          style={{
            width: "100%",
            height: 5,
            borderRadius: 3,
            outline: "none",
            cursor: "pointer",
            appearance: "none",
            background: `linear-gradient(to right, var(--pink) ${pct}%, rgba(255,255,255,.1) ${pct}%)`,
          }}
        />

        {/* Ticks */}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 2px 0" }}>
          {TIERS.map((t, i) => (
            <span
              key={t.qty}
              onClick={() => setIdx(i)}
              style={{
                fontSize: 10,
                color: i === idx ? "var(--pink)" : "var(--muted)",
                fontWeight: i === idx ? 700 : 400,
                cursor: "pointer",
                textAlign: "center",
                flex: 1,
                transition: "color .15s",
              }}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px; height: 24px; border-radius: 50%;
          background: var(--pink); cursor: pointer;
          box-shadow: 0 0 0 5px rgba(255,46,136,.18);
        }
        input[type=range]::-moz-range-thumb {
          width: 24px; height: 24px; border-radius: 50%;
          background: var(--pink); cursor: pointer; border: none;
        }
        @media(max-width:600px){ .calc-top{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
