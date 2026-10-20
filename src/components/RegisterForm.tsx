"use client";
import { useState, FormEvent } from "react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.eventpass.click";

type State = "idle" | "loading" | "error";

export default function RegisterForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError("");

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      password: fd.get("password") as string,
    };

    try {
      const res = await fetch(`${APP_URL}/api/auth/register-public`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Ocurrió un error. Intentá de nuevo.");
        setState("error");
        return;
      }

      window.location.href = data.redirectUrl;
    } catch {
      setError("No se pudo conectar. Verificá tu conexión e intentá de nuevo.");
      setState("error");
    }
  }

  const isLoading = state === "loading";

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 420 }}>
      <input
        name="name"
        type="text"
        placeholder="Tu nombre o nombre del evento"
        required
        minLength={2}
        maxLength={100}
        disabled={isLoading}
        style={inputStyle}
      />
      <input
        name="email"
        type="email"
        placeholder="tu@email.com"
        required
        disabled={isLoading}
        style={inputStyle}
      />
      <div style={{ position: "relative" }}>
        <input
          name="password"
          type={showPass ? "text" : "password"}
          placeholder="Contraseña (mín. 8 caracteres)"
          required
          minLength={8}
          disabled={isLoading}
          style={{ ...inputStyle, paddingRight: 44 }}
        />
        <button
          type="button"
          onClick={() => setShowPass(v => !v)}
          style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--muted)", fontSize: 14, padding: 0 }}
          tabIndex={-1}
          aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
        >
          {showPass ? "🙈" : "👁️"}
        </button>
      </div>

      {error && (
        <p style={{ fontSize: 13, color: "#ff5555", margin: 0 }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        style={{
          background: isLoading ? "rgba(255,46,136,.5)" : "var(--pink)",
          color: "#fff",
          fontFamily: "var(--font-space-grotesk)",
          fontWeight: 700,
          fontSize: 15,
          padding: "13px 0",
          borderRadius: 10,
          border: "none",
          cursor: isLoading ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          transition: "opacity .2s",
          width: "100%",
        }}
      >
        {isLoading ? (
          <>
            <span style={{ width: 14, height: 14, border: "2px solid rgba(255,255,255,.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin .7s linear infinite", display: "inline-block" }} />
            Creando tu cuenta…
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Crear mi cuenta gratis
          </>
        )}
      </button>

      <p style={{ fontSize: 12, color: "var(--muted)", textAlign: "center", margin: "4px 0 0" }}>
        ¿Ya tenés cuenta?{" "}
        <a href={`${APP_URL}/login`} style={{ color: "var(--cyan)", textDecoration: "none" }}>
          Iniciá sesión
        </a>
      </p>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,.05)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  padding: "12px 14px",
  color: "var(--snow)",
  fontSize: 15,
  outline: "none",
  width: "100%",
  fontFamily: "var(--font-ibm-plex-sans)",
  transition: "border-color .2s",
};
