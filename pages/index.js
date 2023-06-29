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
      <div className="container mt-3 text-white">
        <div className="row">
          <div className="c col-4">
            <div className="p-3 bg-c1 rounded shadow">
              <p>[Your Self Introduction]</p>
              <p>
                (This is a sample website - you’ll be building a site like this
                on{" "}
                <a href="https://nextjs.org/learn" className="text-link">
                  our Next.js tutorial
                </a>
                .)
              </p>
            </div>
          </div>
          <div className="c col p-3 ms-3 bg-c2 rounded shadow">
            <h2>Blog</h2>
            <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`} className="text-link">
                    {title}
                  </Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
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
