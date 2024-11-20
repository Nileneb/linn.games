import { signIn, signOut, useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Willkommen bei Linn.Games</h1>
      <p>Hier kannst du dich anmelden, um exklusive Features und 3D-Anwendungen zu nutzen!</p>
      
      {session ? (
        <>
          <p>Willkommen, {session.user?.email}!</p>
          <button
            onClick={() => signOut()}
            style={{
              padding: "10px 20px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Abmelden
          </button>

          <div style={{ marginTop: "20px" }}>
            <a
              href="/dashboard"
              style={{
                display: "inline-block",
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "blue",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Zum Dashboard
            </a>
            <a
              href="/3d"
              style={{
                display: "inline-block",
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Starte 3D-Anwendungen
            </a>
          </div>
        </>
      ) : (
        <button
          onClick={() => signIn("github")}
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Mit GitHub anmelden
        </button>
      )}
    </div>
  );
}
