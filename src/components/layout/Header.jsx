"use client"

import goToSlide from "@/helpers/goToSlide"
import styles from "@/sass/components/layout/header.module.scss"
import Image from "next/image"
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
                    <Image src="/logo.png" className={styles.logo} width={300} height={300}></Image>
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
                <Image src="/logo.png" alt="logo" width={300} height={300} />
            </div>
            <div className={styles.links}>
                <p onClick={() => { goToSlide(sliderRefLeftCol, 0, true); goToSlide(sliderRefRightCol, 0, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.homeIcon}`} />Home</p>
                <p onClick={() => { goToSlide(sliderRefLeftCol, 1, true); goToSlide(sliderRefRightCol, 1, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.whatIcon}`} />Co skanujemy?</p>
                <p onClick={() => { goToSlide(sliderRefLeftCol, 2, true); goToSlide(sliderRefRightCol, 2, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.mIcon}`} />O skanerze Metis</p>
                <p onClick={() => { goToSlide(sliderRefLeftCol, 3, true); goToSlide(sliderRefRightCol, 3, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.seeIcon}`} />Zobacz nas w akcji</p>
                <p onClick={() => { goToSlide(sliderRefLeftCol, 4, true); goToSlide(sliderRefRightCol, 4, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.reviewsIcon}`} />Opinie klientów</p>
                {/* <p onClick={() => { goToSlide(sliderRefLeftCol, 5, true); goToSlide(sliderRefRightCol, 5, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.closeMenu}`} />Galeria skanów</p> */}
                <p onClick={() => { goToSlide(sliderRefLeftCol, 6, true); goToSlide(sliderRefRightCol, 5, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.priceIcon}`} />Cennik Skanowania</p>
                <p onClick={() => { goToSlide(sliderRefLeftCol, 7, true); goToSlide(sliderRefRightCol, 6, true); setShowSidebar(!showSidebar) }}><span className={`icon ${styles.phoneIcon}`} />Kontakt</p>
            </div>
        </nav>
    )
}