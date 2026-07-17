"use client";
export default function SignInPage() {
  return (
    <div style={{ padding: "4rem 2rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ fontSize: "4rem", fontWeight: "900", textTransform: "uppercase", marginBottom: "2rem" }}>Sign In</h1>
      <form className="brutal-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "400px" }}>
        <input type="email" placeholder="Email" style={{ padding: "1rem", border: "var(--border-width) solid var(--border-color)", fontSize: "1.2rem" }} />
        <input type="password" placeholder="Password" style={{ padding: "1rem", border: "var(--border-width) solid var(--border-color)", fontSize: "1.2rem" }} />
        <button type="button" className="brutal-btn brutal-btn-pink">LOGIN</button>
      </form>
    </div>
  );
}
