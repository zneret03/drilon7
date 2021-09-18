import Head from "next/head";
import { SEOTypes } from "@lib/types";

export default function SEO({ title, content }: SEOTypes): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="My Portfolio" />
      <meta property="og:title" content={content} />
    </Head>
  );
}
