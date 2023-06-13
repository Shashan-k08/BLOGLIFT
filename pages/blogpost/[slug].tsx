import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'
const slug = () => {
const router = useRouter();
const {slug}= router.query;
  return (
    <div className={styles.container}>
    <main className={styles.main}>
      {slug}
      </main>
    </div>
  )
}

export default slug;

// this page is an example of dynamic routes here what is written in url will be copied as it is in the page