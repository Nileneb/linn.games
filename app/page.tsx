"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Scene from "./3DScene";
import { FaGithub, FaDiscord } from "react-icons/fa";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-3xl font-bold">Linn.Games</h1>
        <nav className="space-x-4">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/faq" className="hover:underline">
            FAQ
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full h-[70vh]">
          {/* 3D Canvas */}
          <Scene />
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Willkommen bei Linn.Games!
          </h2>
          {session ? (
            <>
              <p>Willkommen, {session.user?.email}!</p>
              <button
                onClick={() => signOut()}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-500"
              >
                Abmelden
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("github")}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-500"
            >
              Mit GitHub anmelden
            </button>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-gray-700 flex justify-center space-x-4">
        <a
          href="https://github.com/nileneb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 flex items-center space-x-2"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
        <a
          href="https://civitai.com/user/Nileneb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 flex items-center space-x-2"
        >
          <FaGithub size={24} />
          <span>Civitai</span>
        </a>
        <a
          href="https://discord.gg/DEIN_DISCORD_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 flex items-center space-x-2"
        >
          <FaDiscord size={24} />
          <span>Discord</span>
        </a>
      </footer>
    </div>
  );
}
