import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </>
  );
}
