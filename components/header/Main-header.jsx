import React from 'react';
import Link from "next/link";
import Image from "next/image";

import logoImage from '@/assets/logo.png';
import styles from './main-header.module.css';
import MainHeaderBackground from "@/components/header/Main-header-background";

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground/>
            <header className={styles.header}>
                <Link href={'/'} className={styles.logo}  >
                    <Image src={logoImage} alt="logo" priority />
                    NextLevel Food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href={'/meals'}>Browse Meals</Link>
                        </li>
                        <li>
                            <Link href={'/community '}>Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;