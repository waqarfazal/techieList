import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Head from 'next/head';
export default function Home() {
  return (
    <>
    <Head>
      <title>Techies List | Home</title>
      <meta name="keywords" content="Techies"></meta>
    </Head>
    <div >
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </p>
        <p className={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </p>
        <Link href="/techies"><a className={styles.btn}>See Techies List</a></Link>
    </div>
    </>
  )
}
