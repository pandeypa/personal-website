import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Edu() {
    return(
        <div>
            <div className={styles.headerAfter}>
                <Header></Header>
            </div>
            <br></br>
            <br></br>
            <h1 className={styles.description}>education</h1>
            <div  className={styles.footerAfter}>
                <Footer></Footer>
            </div>
        </div>
    )
}