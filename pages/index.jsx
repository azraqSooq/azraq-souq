import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Header  from '../src/components/Header'
import Categories from '../src/components/Categories'

export default function Home() {
  return (
    <>
    <body>
      
      <Header />
      < Categories />

    </body>
  </>
  )

}
