import React from "react";
import Link
 from "next/link";

const BlogPage = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <Link href="/blog/first">Link to the Blog 1 Page</Link><br />
      <Link href="/blog/second">Link to the Blog 2 Page</Link><br />
      <Link href="/">Link to the Home Page</Link>
    </div>
  );
};

export default BlogPage;