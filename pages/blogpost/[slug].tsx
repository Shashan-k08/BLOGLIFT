import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'
const slug = () => {
const router = useRouter();
const {slug}= router.query;
  return (
    <div className={styles.container}>
    <main className={styles.main}>
     <h1> Title of the page {slug}</h1> 
     <hr/>
     <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi recusandae, blanditiis sint voluptatum ut voluptas porro reprehenderit ad, doloremque esse optio consequuntur maiores tenetur exercitationem quis eaque. Quos, minus.
     </div>
      </main>
    </div>
  )
}

export default slug;

// this page is an example of dynamic routes here what is written in url will be copied as it is in the page