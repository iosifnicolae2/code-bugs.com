import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Layout from "@/components/Layout";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontVariables, content } = matter(fileName);
  return {
    props: {
      frontVariables,
      content,
    },
  };
}

export default function PostPage({ frontVariables, content }: any) {
  return (
    <Layout seo={frontVariables}>
      <div className="prose mx-auto">
        <h1>{frontVariables?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </Layout>
  );
}
