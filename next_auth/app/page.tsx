"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  if (!user && !userSession) {
    router.push("/signup");
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to FireAuth</h1>
        <p className="mt-2 text-lg">The ultimate authentication solution</p>
      </header>
      <main className="p-4 flex justify-center items-center">
        <div>
          <p className="mb-4">You are logged in!</p>
          <button
            onClick={() => {
              signOut(auth);
              sessionStorage.removeItem("user");
              router.push("/signup");
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}
