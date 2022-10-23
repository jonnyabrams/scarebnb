import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>SpareBnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
    </div>
  )
}

export default Home
