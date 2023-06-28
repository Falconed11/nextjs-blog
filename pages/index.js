import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { getPlayers } from "../lib/player";
import Date from "../components/date";

export default function Home({ allPostsData }, { players }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  //const players = getPlayers().result;

  // Instead of the file system,
  // fetch post data from an external API endpoint

  return {
    props: {
      allPostsData,
      //players,
    },
  };
}

// export async function getPlayerData() {
//   // Instead of the file system,
//   // fetch post data from an external API endpoint
//   const players = await fetch("http://localhost:3001/player")
//     .then((res) => res.json())
//     .then((res) => res.result);
//   return {
//     props: {
//       players,
//     },
//   };
// }

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }
