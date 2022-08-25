import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/*Head*/}

    <Header/>
    
    {/*Feed*/}

    {/*Modal*/}

    </div>
  )
}
