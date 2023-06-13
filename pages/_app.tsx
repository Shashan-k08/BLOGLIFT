import '@/styles/globals.css'
import * as React from 'react';
import Navbar from '../components/Navbar';
export default function App({ Component, pageProps }) {

  return <>
  <Navbar/>
   <Component {...pageProps} /> </>
}
