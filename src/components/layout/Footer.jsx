"use client"

import styles from "@/sass/components/layout/footer.module.scss"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {

    // Get current url
    const pathname = usePathname()

    if (pathname !== "/") return null

    return (
        <footer className={styles.footer}>
            <div className="container">
                {/* <div className={styles.links}>
                    <Link href="https://www.facebook.com/profile.php?id=61560839454370">Facebook</Link>
                    <Link href="https://www.facebook.com/profile.php?id=61560839454370">Instagram</Link>
                </div> */}
                <p className={styles.logo}>Copyright © 2024 Skanowanie.pl Sp. z o.o. | All Rights Reserved | Icons by: <Link href="https://icons8.com">Icons8</Link></p>
            </div>
        </footer>
    )
}