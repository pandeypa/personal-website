import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import classnames from 'classNames'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../pages/slice'


export default function Header() {
    const tgl = useSelector((state) => state.toggle.value)
    const dispatch = useDispatch()
  
    return (
        <div>
            <Link passHref href="/"><p className={styles.home}>Home</p></Link>

            <p className={styles.navButton} onClick={() => dispatch(toggle())}>=</p>

            <div className={classnames(tgl&&styles.navOpen, !tgl&&styles.navClose)}>
            <Link passHref href="/exp"><p className={styles.headerLinks}>Work</p></Link>
            <Link passHref href="/edu"><p className={styles.headerLinks}>Education</p></Link>
            <Link passHref href="/pro"><p className={styles.headerLinks}>Projects</p></Link>
            </div>
        </div>
    )
}