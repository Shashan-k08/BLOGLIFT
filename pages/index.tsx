import Head from 'next/head'
import * as React from 'react';
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
          h2{
            font-size: 38px;
          }
          h3{
            font-size: 28px;
          }
         `}
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='/sc.js' strategy="lazyOnload"></Script> */}
     
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1><div className={styles.imagewrap}>
          <Image alt='' className={styles.myImg} src="/home1.jpg" width={237} height={158} />
        </div>
        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}