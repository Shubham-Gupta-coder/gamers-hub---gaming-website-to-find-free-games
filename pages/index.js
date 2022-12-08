import Head from 'next/head'
import Image from 'next/image'
import Gamesection from '../components/Gamesection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Search For Free Games Of Your Taste</title>
        <meta name="description" content="This is Your Free To Play Games Finder Created By Coder Shubham" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Gamesection/>

    </div>
  )
}
