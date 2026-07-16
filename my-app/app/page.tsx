import Image from "next/image";
import Link from "next/link";
 
export default function Home() {
  return (
    <>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      HOME PAGE
    </div>

    <Link href="blog" className="underline text-blue-500 text-3xl">Blog</Link>
    <br />
    <br />

    <Link href="products" className="underline text-blue-500 text-3xl">Products</Link>
<br />
    <br />
     <Link href="/articles/breaking-news-1?lang=en" className="underline text-blue-500">Read in English</Link>
    <br />
    <br /> 
      <Link href="/articles/breaking-news-2?lang=fr" className="underline text-blue-500">Read in French</Link>

    </>
  );
}
