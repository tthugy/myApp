import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profile from './profile'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/profile">
        <a className={styles.link}>Go to profile 🫧</a>
      </Link>
      <Image src="/assets/next.png" width={100} height={100}></Image>
      welcome to my-App 🥸
    </div>
  )
}
