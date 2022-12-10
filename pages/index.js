import Head from 'next/head'
import React from 'react'
import classnames from 'classNames'
import styles from '../styles/Home.module.css'
import pic from '../public/IMG_6534.JPG'
import Image from 'next/image'
import Link from 'next/link'
import gmail from '../public/icons8-gmail-logo-480.png'
import ig from '../public/icons8-instagram-480.png'
import ld from '../public/icons8-linkedin-circled-480.png'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  const [start, setStart] = React.useState(false);
  const act = ['code', 'swim', 'jump', 'draw', 'love', 'pray', 'fish', 'care'];
  const [i, seti] = React.useState(5)

  React.useEffect(() => {
      const timer =
        i > 0 && setInterval(() => seti(i + 1), 1000);
      return () => clearInterval(timer);
    }, [i]);

  return(

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <main className={styles.main}>

        <div className={classnames(styles.header, start&&styles.headerAfter)}>
        <Header></Header>
        </div>

        <div className={start&&styles.updiv}>
        <h1 className={styles.title}>
          Hello!
        </h1>

        <h1 className={styles.title}>
          My name is Pascal
        </h1>
        </div>

        <button className={classnames(styles.hover, start&&styles.hoverAfter)} onClick={() => setStart(true)} start={start}>click me</button>
        
        <Image src={pic} width='600' height='400' className={classnames(styles.imgHide, start&&styles.imgAfter)} alt="pic"/>

        <div className={start&&styles.downdiv}>
        <p className={styles.description}>
          Currently I'm learning how to
          <code className={styles.code}>{act[i%act.length]}</code>
        </p>
        </div>
        
        <div className={classnames((!start)&&styles.left, start&&styles.leftAfter)}>
          <p>contact me:</p>
        </div>

        <div className={classnames(styles.right, start&&styles.rightAfter)}>
          <div className={styles.icon}><Link href="https://instagram.com"><Image src={ig} width='45' height='45' alt="pic"/></Link></div>
          <div className={styles.icon}><Link href="https://linkedin.com"><Image src={ld} width='45' height='45' alt="pic"/></Link></div>
          <div className={styles.icon}><Link href="https://gmail.com"><Image src={gmail} width='45' height='45' alt="pic"/></Link></div>
        </div>

        <div className={classnames((!start)&&styles.footer, start&&styles.footerAfter)}>
        <Footer></Footer>
        </div>

      </main>
    </div>
  )
}
