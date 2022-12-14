import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth()+1;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '47e9d998a4msh7fdd82ea7b4d21fp1cc21ajsn489f8342e64b',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
    };
    const res = await fetch(`https://numbersapi.p.rapidapi.com/${month}/${date}/date?fragment=true&json=true`, options);
    const data = await res.json();
    return {
        props: {txt: data}
    }
}

export default function Pro({txt}) {
    const newDate = new Date();
    const date = newDate.getDate();
    const prefix = date === 1? 'st': date === 2? 'nd': date === 3? 'rd': 'th';
    const monthI = newDate.getMonth();
    const month = ["January","February","March","April","May","June","July",
                    "August","September","October","November","December"][monthI];
    return(
        <div>
            <div className={styles.headerAfter}>
                <Header></Header>
            </div>
            <br></br>
            <br></br>
            <h1 className={styles.description}>projects</h1>
            <br></br>
            <h1 className={styles.description}>Today, on the {date}{prefix} of {month} {txt.year}, {txt.text}.</h1>
            <div  className={styles.footerAfter}>
                <Footer></Footer>
            </div>
        </div>
    )
}