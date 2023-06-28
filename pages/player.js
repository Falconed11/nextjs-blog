import Layout from "../components/layout";
import Head from "next/head";
import { getPlayers } from "../lib/player";

export default function Player({ players }) {
  return (
    <Layout>
      <Head>
        <title>Player Page</title>
      </Head>
      <section>
        <h2>Player</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Point</th>
            </tr>
          </thead>
          <tbody>
            {players.map(({ id, username, point }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{username}</td>
                <td>{point}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  // fetch post data from an external API endpoint
  const res = await getPlayers();
  const players = await res.result;
  return {
    props: {
      players,
    },
  };
}
