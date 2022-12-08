import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Exp() {
    return(
        <div>
            <div className={styles.headerAfter}>
                <Header></Header>
            </div>
            <div  className={styles.footerAfter}>
                <Footer></Footer>
            </div>
        </div>
    )
}