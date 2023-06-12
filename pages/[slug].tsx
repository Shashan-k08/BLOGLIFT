import React from 'react'
import { useRouter } from 'next/router'
const slug = () => {
const router = useRouter();
const {slug}= router.query;
  return (
    <div>
      {slug}
    </div>
  )
}

export default slug;

// this page is an example of dynamic routes here what is written in url will be copied as it is in the page