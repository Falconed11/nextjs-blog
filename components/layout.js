import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Falconed11";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <header className={styles.header}> */}
      <header>
        <nav>
          <div className="container rounded shadow bg-nav text-white mt-3 py-1 jus">
            <ul className="nav nav-pills text-white justify-content-center">
              {home ? (
                <Link className="navbar-brand text-white" href="#">
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className="d-inline-block rounded-circle mx-2 align-text-top text-white"
                    height={30}
                    width={30}
                    alt=""
                  />
                  {name}
                </Link>
              ) : (
                <>
                  <Link href="/">
                    <Image
                      priority
                      src="/images/profile.jpg"
                      className="rounded"
                      height={108}
                      width={108}
                      alt=""
                    />
                  </Link>
                  <h2>
                    <Link href="/">{name}</Link>
                  </h2>
                </>
              )}

              <li className="nav-item">
                <Link className="nav-link text-white" href="/player">
                  Player
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="#">
                  Rank
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
