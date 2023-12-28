'use client';

import Link from "next/link";
import styles from "./Nav-link.module.css";
import {usePathname} from "next/navigation";


const NavLink = ({href, title }) => {
    const path = usePathname()
    return (
        <Link href={href} className={path.startsWith(href) ? styles.active:undefined}>{title}</Link>
    );
};

export default NavLink;