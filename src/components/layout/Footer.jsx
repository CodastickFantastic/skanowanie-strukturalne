import styles from "@/sass/components/layout/footer.module.scss"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                {/* <div className={styles.links}>
                    <Link href="https://www.facebook.com/profile.php?id=61560839454370">Facebook</Link>
                    <Link href="https://www.facebook.com/profile.php?id=61560839454370">Instagram</Link>
                </div> */}
                <p className={styles.logo}>Icons by: <Link href="https://icons8.com">Icons8</Link></p>
            </div>
        </footer>
    )
}