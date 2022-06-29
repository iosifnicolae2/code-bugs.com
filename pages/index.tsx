import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

import Layout from "@/components/Layout";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map(fileName => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontVariables } = matter(readFile);
    return {
      slug,
      frontVariables,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const seo = {
  metaTitle: "Fix your issue with Code-bugs.com 🚀",
  metaDesc: "The best website where you can find solution for your issue/bug.",
};

export default function Home({ posts }: any) {
  return (
    <Layout seo={seo}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
        {posts.map(({ slug, frontVariables }: any) => (
          <div
            key={slug}
            className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col">
            <Link href={`/post/${slug}`}>
              <a>
                <h1 className="p-4">{frontVariables.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
