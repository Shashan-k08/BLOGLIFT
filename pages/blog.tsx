import React from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
const blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>


        <div className="blogItem">
          <Link href={'/blogpost/learn_javascript'}>
          <h3>How to learn JavaScript in 2022?</h3></Link>
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

      </main>

    </div>
  )
}

export default blog
