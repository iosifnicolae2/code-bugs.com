import React from "react";

class Sitemap extends React.Component {
  static async getInitialProps({ res }: any) {
    res.setHeader("Content-Type", "text/xml");
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ...
    </urlset>`);
    res.end();
  }
}

export default Sitemap;
