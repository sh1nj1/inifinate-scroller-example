import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import InfiniteScroll from "react-infinite-scroller";
import {useState} from "react";

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export default function Home() {

  const[items, setItems] = useState([]);
  const[hasMore, setHasMore] = useState(true);
  const[page, setPage] = useState(0);
  const loadFunc = (page) => {
    delay(1000).then(() => {
      console.log("loaded data with params: page=", page)
      setItems([...items, ...['a', 'b', 'c', 'd', 'e']])
      setPage(page)
      setHasMore(page <= 10)
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div style={{height: '100%', overflow: 'auto'}}>
          <InfiniteScroll
              pageStart={0}
              loadMore={loadFunc}
              hasMore={hasMore}
              threshold={10}
              loader={<div className="loader" key={0}>Loading ...</div>}
              useWindow={true}
          >
            <div className={styles.grid}>
            {items.map((item, index) => (

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    className={styles.card}
                    key={index}
                >
                  <h2>Deploy {item}&rarr;</h2>
                  <p>
                    Instantly deploy your Next.js site to a public URL with Vercel.
                  </p>
                </a>
            ))}
            </div>
          </InfiniteScroll>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
