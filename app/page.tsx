import { signIn, signOut, useSession } from "next-auth/react";
import Scene from "./3DScene";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Willkommen bei Linn.Games</h1>
      <p>Exklusive Features und 3D-Anwendungen!</p>
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
            }}
          >
            Abmelden
          </button>
          <Scene />
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
