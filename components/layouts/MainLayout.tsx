import Head from 'next/head'
import { PropsWithChildren } from "react"

import Link from 'next/link'

import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

export const MainLayout  = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>

        { children }

      </main>

    </div>
  )
}
