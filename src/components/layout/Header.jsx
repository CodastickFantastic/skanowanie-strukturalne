"use client"

import styles from "@/sass/components/layout/header.module.scss"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <>
            <SideBarMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <header className={styles.header}>
                <span className={`icon ${styles.hamburgerMenu}`} onClick={() => setShowSidebar(!showSidebar)} />
                <div className="container">
                    <h1 className={styles.header}>Skanowanie Strukturalne</h1>
                </div>
            </header>
        </>
    )
}

function SideBarMenu({ showSidebar, setShowSidebar }) {

    return (
        <nav className={`${styles.sidebarMenu} ${showSidebar ? styles.show : ""}`}>
            <div className={styles.sidebarHeader}>
                <p>LOGO</p>
                <span className={`icon ${styles.closeMenu}`} onClick={() => setShowSidebar(!showSidebar)} />
            </div>
            <div className={styles.links}>
                <Link href="/"><span className={`icon ${styles.closeMenu}`} />Strona główna</Link>
                <Link href="/"><span className={`icon ${styles.closeMenu}`} />Strona główna</Link>
                <Link href="/"><span className={`icon ${styles.closeMenu}`} />Strona główna</Link>
                <Link href="/"><span className={`icon ${styles.closeMenu}`} />Strona główna</Link>
                <Link href="/"><span className={`icon ${styles.closeMenu}`} />Strona główna</Link>
                <Link href="/"><span className={`icon ${styles.closeMenu}`} />Strona główna</Link>
                <Link href="/"><span className={`icon ${styles.closeMenu}`} />Strona główna</Link>
            </div>
        </nav>
    )
}