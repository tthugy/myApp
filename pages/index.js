import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profile from './profile'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/profile">
        <a className={styles.link}>profile</a>
      </Link>
      welcome to myApp 🥸
    </div>
  )
}
