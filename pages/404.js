import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - Page not Found</title>
      </Head>
      <section>
        <h1>404 - Page Not Found</h1>
      </section>
    </Layout>
  );
}
