import React from "react";
import Link
 from "next/link";
 
const Blog2Page = () => {
  return (
    <div>
      <h1>Blog 2 Page</h1>
      <Link href="/blog">Link to the Blog Page</Link>
    </div>
  );
};

export default Blog2Page;