import Link from "next/link";
import Head from "next/head";

export default function Layout({ seo, children }: any) {
  return (
    <>
      <Head>
        <title>{seo?.metaTitle}</title>
        <meta property="title" content={seo?.metaTitle} />
        <meta name="description" content={seo?.metaDesc} />
        <meta property="og:title" content={seo?.metaTitle} />
        <meta name="og:description" content={seo?.metaDesc} />
        <meta name="keywords" content={seo?.keywords?.join(", ")} />
        <link rel="icon" href="../public/images/favicon.ico" />
      </Head>
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
    </>
  );
}
