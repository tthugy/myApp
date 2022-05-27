import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function profile() {
  return (
    <div>
      <Link href="/">
        <a className={styles.link}>index</a>
      </Link>
      Profile 🫠!
    </div>
  )
}
