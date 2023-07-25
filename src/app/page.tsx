"use client";

import Image from 'next/image'
import Link from 'next/link'
import styles from '../css/page.module.css'
import aboutPG from '../components/body/aboutPG/aboutPG'

const Home = ({ children }: { children: React.ReactNode; }) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}
