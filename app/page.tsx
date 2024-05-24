import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/about">Link to the About Page</Link><br />
      <Link href="/blog">Link to the Blog Page</Link><br />
      <Link href="/products">Link to the Products Page</Link>
    </main>
  );
}
