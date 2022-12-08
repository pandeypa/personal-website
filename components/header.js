import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <Link passHref href="/"><p className={styles.home}>Home</p></Link>
            <Link passHref href="/exp"><p className={styles.headerLinks}>Experience</p></Link>
            <p className={styles.headerLinks}>Education</p>
            <p className={styles.headerLinks}>Projects</p>
        </div>
    )
}