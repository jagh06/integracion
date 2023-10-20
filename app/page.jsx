import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return (
    <SessionProvider basePath="/api/auth/">
      <main>
        <header>
          <div c>
            <div>
              <div>
                <nav>
                  <Link href="">Recomendados</Link>
                  <Link href="">Hospedajes</Link>
                  <Link href="/login">Login</Link>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </main>
    </SessionProvider>
  );
}
