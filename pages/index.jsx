import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Header  from '../src/components/Header'
import Categories from '../src/components/Categories'
import About from '../src/components/About'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <>
    <body>
      <Header />
        < Categories />
        <About />
      <Footer />
    </body>
  </>
  )

}
