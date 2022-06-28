import Link from "next/link";

export default function Layout({ children }: any) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 mb-8 py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            <a>🏡</a>
          </Link>
          <span className="mx-auto">code-bugs.com</span>{" "}
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-blue-500 mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          &copy; 2022 code-bugs.com
        </div>
      </footer>
    </div>
  );
}
