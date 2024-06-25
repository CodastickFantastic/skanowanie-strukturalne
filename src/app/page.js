"use client"

import Image from "next/image";
import styles from "@/sass/page.module.scss";
import { useEffect, useRef } from "react";
import { changeSlideByWheelLeftCol, changeSlideByWheelRightCol } from "@/helpers/changeSlideByWheel";
import useTouchEvents from "@/helpers/useTouchEvents";
import Link from "next/link";
import goToSlide from "@/helpers/goToSlide";

export default function Home() {
  const sliderRefLeftCol = useRef(null);
  const sliderRefRightCol = useRef(null);
  const { onTouchStart, onTouchEnd } = useTouchEvents()

  useEffect(() => {
    document.addEventListener("wheel", () => changeSlideByWheelLeftCol(sliderRefLeftCol))
    document.addEventListener("wheel", () => changeSlideByWheelRightCol(sliderRefRightCol))
    document.addEventListener("touchstart", (e) => onTouchStart(e))
    document.addEventListener("touchend", (e) => onTouchEnd(e, sliderRefLeftCol))

    return () => {
      document.removeEventListener("wheel", () => changeSlideByWheelLeftCol(sliderRefLeftCol))
      document.removeEventListener("wheel", () => changeSlideByWheelRightCol(sliderRefRightCol))
      document.removeEventListener("touchstart", (e) => onTouchStart(e))
      document.removeEventListener("touchend", (e) => onTouchEnd(e, sliderRefLeftCol))
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={`${styles.mainContainer} container`}>
        <div className={styles.leftCol}>
          <div className={styles.sectionsHolder} ref={sliderRefLeftCol} >
            {/* SECTION - FIRST SLIDE CONTENT */}
            <section className={styles.section}>
              <h1 className={styles.sectionTitle}>Skanowanie Strukturalne</h1>
              <p className={styles.sectionText}>Nasza technologia pozwoli na uzyskanie odwzorowania trójwymiarowych obiektów zamiast płaskich zdjęć - nowość na polskim rynku - skan 3D (strukturalny). Plik uwydatnia całą strukturę przedmiotu skanowanego.</p>
              <button className={styles.sectionButton} onClick={() => goToSlide(sliderRefLeftCol, 1)}>Pokaż Film</button>
            </section>
            {/* SECTION - SECOND SLIDE CONTENT */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Co Skanujemy?</h2>
              <p className={styles.sectionText}>Dzięki wykorzystaniu najnowszej technologii jesteśmy w stanie dokonać skanowania strukturalnego niemalże każdej powierzchni. Skonktaktuj się z nami by poznać szczegóły.</p>
              <div className={styles.featuresHolder}>
                <div className={styles.feature}><span className={`icon ${styles.labelIcon}`} /><p>Obrazy w ramie lub bez</p></div>
                <div className={styles.feature}><span className={`icon ${styles.labelIcon}`} /><p>Plakaty</p></div>
                <div className={styles.feature}><span className={`icon ${styles.labelIcon}`} /><p>Drewno</p></div>
                <div className={styles.feature}><span className={`icon ${styles.labelIcon}`} /><p>Płytki ceramiczne</p></div>
                <div className={styles.feature}><span className={`icon ${styles.labelIcon}`} /><p>Kamień</p></div>
                <div className={styles.feature}><span className={`icon ${styles.labelIcon}`} /><p>Materiał</p></div>
              </div>
              <button className={styles.sectionButton} onClick={() => goToSlide(sliderRefLeftCol, 0)}>Skontaktuj się z nami</button>
            </section>
            {/* SECTION - THIRD SLIDE CONTENT */}
            <section className={styles.section}>
              <p>Sekcja 3</p>
            </section>
          </div>
        </div>
        <div className={styles.rightCol}>
          {/* DECORATION - PHONE FRAME */}
          <Image src="/images/ramka_telefonu.png"
            className={styles.phoneFrame}
            alt="Ramka telefonu"
            width={240}
            height={480}
          />
          <div className={styles.imgSectionsHolder}  >
            <div className={styles.imgSectionTruck} ref={sliderRefRightCol}>
              {/* SECTION - FIRST SLIDE IMG */}
              <section className={styles.imgSection}>
                <p>Sekcja 1</p>
              </section>
              {/* SECTION - SECOND SLIDE IMG */}
              <section className={styles.imgSection}>
                <p>Sekcja 2</p>
              </section>
              {/* SECTION - THIRD SLIDE IMG */}
              <section className={styles.imgSection}>
                <p>Sekcja 3</p>
              </section>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
