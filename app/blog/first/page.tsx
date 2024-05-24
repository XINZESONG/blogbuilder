import React from "react";
import Link
 from "next/link";
 
const Blog1Page = () => {
  return (
    <div>
      <h1>Blog 1 Page</h1>
      <Link href="/blog">Link to the blog Page</Link>
    </div>
  );
};

export default Blog1Page;