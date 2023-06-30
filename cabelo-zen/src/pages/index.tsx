import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../Components/Header'
import Tricologista from '../Components/Tricologista'
import Footer from '../Components/Footer'
import Sobre from '../Components/Sobre'
import Comentarios from '../Components/Comentarios'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>CabeloZen</title>
        <meta name="description" content="Cabelozen - Terapia Capilar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div>
      <Header />
      <Tricologista/>
      <Sobre/>
      <Comentarios/>
      </div>
      </main>
      <Footer/>
    </>
  )
}
