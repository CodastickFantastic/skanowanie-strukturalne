"use client"

import goToSlide from "@/helpers/goToSlide"
import styles from "@/sass/components/layout/header.module.scss"
import { useEffect, useRef, useState } from "react"

export default function Header() {
    const [showSidebar, setShowSidebar] = useState(false)
    let sliderRefLeftCol = useRef(null)
    let sliderRefRightCol = useRef(null)

    useEffect(() => {
        sliderRefLeftCol.current = document.getElementById("sliderRefLeftCol")
        sliderRefRightCol.current = document.getElementById("sliderRefRightCol")
    }, [])

    return (
        <>
            <SideBarMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <header className={styles.header}>
                <div className="container">
                    <p className={styles.logo} onClick={() => console.log(sliderRefLeftCol)}>LOGO</p>
                    <span className={`icon ${styles.hamburgerMenu}`} onClick={() => setShowSidebar(!showSidebar)} />
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
            </div>
            <div className={styles.links}>
                <p href="/" onClick={() => { goToSlide(sliderRefLeftCol, 0, true); goToSlide(sliderRefRightCol, 0, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.closeMenu}`} />Home</p>
                <p href="/" onClick={() => { goToSlide(sliderRefLeftCol, 1, true); goToSlide(sliderRefRightCol, 1, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.closeMenu}`} />Co skanujemy?</p>
                <p href="/" onClick={() => { goToSlide(sliderRefLeftCol, 2, true); goToSlide(sliderRefRightCol, 2, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.closeMenu}`} />O skanerze Metis</p>
                <p href="/" onClick={() => { goToSlide(sliderRefLeftCol, 3, true); goToSlide(sliderRefRightCol, 3, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.closeMenu}`} />Zobacz nas w akcji</p>
                <p href="/" onClick={() => { goToSlide(sliderRefLeftCol, 4, true); goToSlide(sliderRefRightCol, 4, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.closeMenu}`} />Opinie klientów</p>
                <p href="/" onClick={() => { goToSlide(sliderRefLeftCol, 5, true); goToSlide(sliderRefRightCol, 5, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.closeMenu}`} />Galeria skanów</p>
                <p href="/" onClick={() => { goToSlide(sliderRefLeftCol, 6, true); goToSlide(sliderRefRightCol, 6, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.closeMenu}`} />Cennik Skanowania</p>
            </div>
        </nav>
    )
}