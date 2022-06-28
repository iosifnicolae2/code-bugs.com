import React from "react";
import { GetServerSideProps } from "next";
import matter from "gray-matter";

const Sitemap: React.FC = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (res) {
    const fs = require("fs");
    const files = fs.readdirSync("posts");

    const posts = files.map((fileName: string) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
      const { data: frontVariables } = matter(readFile);
      return {
        slug,
        frontVariables,
      };
    });
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts
          .map((post: any) => {
            return `
              <url>
                <loc>https://code-bugs.com/post/${post.slug}</loc>
                <lastmod>${
                  post.frontVariables.date || new Date().toISOString()
                }</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
          })
          .join("")}
      </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  }
  return {
    props: {},
  };
};

export default Sitemap;
