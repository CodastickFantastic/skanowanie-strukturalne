"use client"

import Image from "next/image";
import styles from "@/sass/page.module.scss";
import { useEffect, useRef, useState } from "react";
import { changeSlideByWheelLeftCol, changeSlideByWheelRightCol } from "@/helpers/changeSlideByWheel";
import useTouchEvents from "@/helpers/useTouchEvents";
import Link from "next/link";
import goToSlide from "@/helpers/goToSlide";

export default function HomePage() {
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
          <div className={styles.sectionsHolder} ref={sliderRefLeftCol} id="sliderRefLeftCol" >
            {/* SECTION - FIRST SLIDE CONTENT */}
            <HeroSection sliderRefLeftCol={sliderRefLeftCol} sliderRefRightCol={sliderRefRightCol} />
            {/* SECTION - SECOND SLIDE CONTENT */}
            <FeaturesSection sliderRefLeftCol={sliderRefLeftCol} sliderRefRightCol={sliderRefRightCol} />
            {/* SECTION - THIRD SLIDE CONTENT */}
            <PickerSection />
            {/* SECTION - FOURTH SLIDE CONTENT */}
            <VideoSection />
            {/* SECTION - FIFTH SLIDE CONTENT */}
            <ClientFeedbackSection />
            {/* SECTION - SIXTH SLIDE CONTENT */}
            <PhotosSection />
            {/* SECTION - SEVENTH SLIDE CONTENT */}
            <PricingSection />
            {/* SECTION - EIGHTH SLIDE CONTENT */}
            <ContactFormSection />
          </div>
        </div>
        <div className={styles.rightCol}>
          {/* DECORATION - PHONE FRAME */}
          <Image src="/images/ramka_telefonu.png"
            priority={true}
            className={styles.phoneFrame}
            alt="Ramka telefonu"
            width={240}
            height={480}
          />
          <div className={styles.imgSectionsHolder}  >
            <div className={styles.imgSectionTruck} ref={sliderRefRightCol} id="sliderRefRightCol">
              {/* SECTION - FIRST SLIDE IMG */}
              <section className={styles.imgSection}>
                <p>Zdjęcie 1</p>
              </section>
              {/* SECTION - SECOND SLIDE IMG */}
              <section className={styles.imgSection}>
                <p>Zdjęcie 2</p>
              </section>
              {/* SECTION - THIRD SLIDE IMG */}
              <section className={styles.imgSection}>
                <p>Zdjęcie 3</p>
              </section>
              {/* SECTION - FOURTH SLIDE IMG */}
              <section className={styles.imgSection}>
                <p>Zdjęcie 4</p>
              </section>
              {/* SECTION - FIFTH SLIDE IMG */}
              <section className={styles.imgSection}>
                <p>Zdjęcie 5</p>
              </section>
              {/* SECTION - SIXTH SLIDE IMG */}
              <section className={styles.imgSection}>
                <p>Zdjęcie 6</p>
              </section>
              {/* SECTION - SEVENTH SLIDE IMG */}
              <section className={styles.imgSection}>
                <p>Zdjęcie 7</p>
              </section>
              {/* SECTION - EIGHTH SLIDE IMG */}
              <section className={styles.imgSection}>
                <p>Zdjęcie 8</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// 1st Section
function HeroSection({ sliderRefLeftCol, sliderRefRightCol }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.sectionTitle}>Skanowanie Strukturalne</h1>
      <p className={styles.sectionText}>Nasza technologia pozwoli na uzyskanie odwzorowania trójwymiarowych obiektów zamiast płaskich zdjęć - nowość na polskim rynku - skan 3D (strukturalny). Plik uwydatnia całą strukturę przedmiotu skanowanego.</p>
      <button className={styles.sectionButton} onClick={() => { goToSlide(sliderRefLeftCol, 3); goToSlide(sliderRefRightCol, 3) }}>
        <span className={`icon ${styles.videoIcon}`} />Pokaż Film
      </button>
      <div className={styles.marginBottom} />
    </section>
  )
}

// 2nd Section
function FeaturesSection({ sliderRefLeftCol, sliderRefRightCol }) {
  return (
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
      <button className={styles.sectionButton} onClick={() => { goToSlide(sliderRefLeftCol, 7); goToSlide(sliderRefRightCol, 7) }}>
        <span className={`icon ${styles.phoneIcon}`} />Skontaktuj się z nami
      </button>
      <div className={styles.marginBottom} />
    </section>
  )
}

// 3rd Section
function PickerSection({ sliderRefLeftCol }) {
  const [showSection, setShowSection] = useState(0);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>O Metisie</h2>
      <div className={styles.sectionPickerTop}>
        <p className={`${styles.tile} ${showSection === 0 ? styles.tileActive : ''}`} onClick={() => setShowSection(0)}><span className={`icon ${styles.descriptionIcon}`} />Opis</p>
        <p className={`${styles.tile} ${showSection === 1 ? styles.tileActive : ''}`} onClick={() => setShowSection(1)}><span className={`icon ${styles.specificationIcon}`} />Specyfikacja</p>
        <p className={`${styles.tile} ${showSection === 2 ? styles.tileActive : ''}`} onClick={() => setShowSection(2)}><span className={`icon ${styles.bulbIcon}`} />Oświetlenie</p>
        <p className={`${styles.tile} ${showSection === 3 ? styles.tileActive : ''}`} onClick={() => setShowSection(3)}><span className={`icon ${styles.helpIcon}`} />Broszura</p>
      </div>
      <div className={styles.sectionPickerContent}>
        {showSection === 0 && <p>Metis DRS 1622 DCS Plus oferuje obsługę formatu skanowania do 160 x 100 cm (62,99 x
          39,37 cala) i jest najnowszym modelem w rodzinie tych skanerów.<br /><br /> Został stworzony specjalnie do
          zastosowań przemysłowych i dekoracyjnych. Jego funkcje są zaprojektowane tak, aby sprostać
          nawet najbardziej wymagającym zadaniom.</p>}
        {showSection === 1 && <ul>
          <li>Format skanowania : 160 x 100 cm</li>
          <li>Rozdzielczość optyczna : 1200</li>
          <li>PPI przy 160 x 34,5 cm (62,99 x 13,58 cala) lub 400 PPI przy pełnym formacie</li>
          <li>Formaty zapisu obrazu: Metis MDC, standardowy TIFF (kolor: 48
            lub 24 bity; skala szarości: 16 lub 8 bitów)</li>
        </ul>}
        {showSection === 2 && <p>Nowy i ulepszony system oświetlenia DC Synchrolight
          zaktualizowany do najnowszej technologii LED o zwiększonej mocy
          oświetlenia i oddawania barw.<br /><br /> Światło synchronizacyjne DC (dynamicznie
          sterowane światło zsynchronizowane) to technologia METIS chroniona
          patentem .</p>}
        {showSection === 3 && <p>Metis DRS 1622 DCS Plus oferuje obsługę formatu skanowania do 160 x 100 cm (62,99 x
          39,37 cala) i jest najnowszym modelem w rodzinie tych skanerów.<br /><br /> Został stworzony specjalnie do
          zastosowań przemysłowych i dekoracyjnych. Jego funkcje są zaprojektowane tak, aby sprostać
          nawet najbardziej wymagającym zadaniom.</p>}
      </div>
      <div className={styles.marginBottom} />
    </section>
  )
}

function VideoSection({ sliderRefLeftCol }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Zobacz Nas w Akcji</h2>
      <p className={styles.sectionText}>Przekonaj się jak działamy. Zobacz krok po kroku jak wygląda proces tworzenia skanów strukturalnych. Przekonaj się, że nasza firma to jedyny słuszny wybór.</p>
      <video className={styles.sectionVideo} autoPlay loop muted playsInline controls>
        <source src="/video/video_1.webm" type="video/webm" />
      </video>
      <div className={styles.marginBottom} />
    </section>
  )
}

function ClientFeedbackSection({ sliderRefLeftCol }) {
  const sliderRef = useRef(null)
  let preventSliderScroll = false

  function nextFeedback() {
    const maxScroll = sliderRef.current.clientWidth * (sliderRef.current.children.length - 1)

    if (!preventSliderScroll) {
      setTimeout(() => {
        preventSliderScroll = false
      }, 500)
      if (sliderRef.current.scrollLeft < maxScroll) {
        preventSliderScroll = true
        sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' })
      } else {
        preventSliderScroll = true
        sliderRef.current.scrollBy({ left: -maxScroll, behavior: 'smooth' })
      }
    }
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Zadowoleni Klienci</h2>
      <div className={styles.feedbackContainer} ref={sliderRef}>
        <div className={styles.feedback}>
          <p className={styles.feedbackContent}>„Moje obrazy skanowane są “od ręki”. Jestem bardzo zadowolony ze współpracy i oczywiście nadal będę ją kontynuował. Kontakt z firmą jest również na wysokim poziomie, tak jak skany moich prac.”</p>
          <div className={styles.feedbackFooter}>
            <p className={styles.feedbackAuthor}>~ Wojciech Brewka</p>
            <div className={styles.feedbackRate}>
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} style={{ opacity: '0.4' }} />
            </div>
          </div>
        </div>
        <div className={styles.feedback}>
          <p className={styles.feedbackContent}>„W zasadzie uratowaliście nam życie. Nigdzie nie było dostępnych płaskich skanerów. Jeśli chodzi o kontakt to również 5/5 no i bardzo fajna atmosfera na miejscu – podczas oczekiwania na skany. Także wszystko na tip-top polecam!”</p>
          <div className={styles.feedbackFooter}>
            <p className={styles.feedbackAuthor}>~ Dawid Bobrowski</p>
            <div className={styles.feedbackRate}>
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
            </div>
          </div>
        </div>
        <div className={styles.feedback}>
          <p className={styles.feedbackContent}>„Wykonałem kilkanaście skanów w tej firmie. Za każdym razem mogłem liczyć na profesjonalizm, rzetelność i wysoką jakość skanowania potrzebną mi do przygotowania wysokiej jakości reprodukcji moich obrazów.”</p>
          <div className={styles.feedbackFooter}>
            <p className={styles.feedbackAuthor}>~ Krzysztof Kargol</p>
            <div className={styles.feedbackRate}>
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} style={{ opacity: '0.4' }} />
            </div>
          </div>
        </div>
        <div className={styles.feedback}>
          <p className={styles.feedbackContent}>„Jestem bardzo zadowolona z obsługi w Państwa firmie. Zaobserwowałam, że: 1. osługa klienta jest na najwyższym poziomie – kompetencje pracowników, rewelacyjna komunikacja, rzeczowość, słowność, życzliwość. 2. jakosc skanów jest wspaniała. Na pewno będe korzystać z Państwa usług.”</p>
          <div className={styles.feedbackFooter}>
            <p className={styles.feedbackAuthor}>~ AdrienneArtPouring</p>
            <div className={styles.feedbackRate}>
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
            </div>
          </div>
        </div>
        <div className={styles.feedback}>
          <p className={styles.feedbackContent}>„Z głębokim przekonaniem doradzam i polecam skorzystanie z usług. Jakość oferowana przez tę firmę stoi na najwyższym poziomie. Dostępne jedynie tu, wielkoformatowe płaskie skanery, pozwalają na bardzo precyzyjne fotografowanie nawet bardzo duzych arkuszy. Niezwykła jakosc skanowania i idealnie odwzorowanie kolorów, pozwala na wykorzystanie go w obszarze wymagającym takich parametrów. Współpraca z pracownikami jest czystą przyjemnością.”</p>
          <div className={styles.feedbackFooter}>
            <p className={styles.feedbackAuthor}>~ Dr Daniel Zerewicz</p>
            <div className={styles.feedbackRate}>
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
              <span className={`icon ${styles.feedbackStarIcon}`} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.feedbackNavigation}>
        <button className={styles.sectionButton} onClick={() => nextFeedback()}>Pokaż Kolejną Opinię <span className={`icon ${styles.arrowIcon}`} /></button>
      </div>
      <div className={styles.marginBottom} />
    </section>
  )
}

function PhotosSection() {
  const [showPhoto, setShowPhoto] = useState(0);
  const photoData = [
    "/images/featuredPhotos/photo1.jpg",
    "/images/featuredPhotos/photo2.jpg",
    "/images/featuredPhotos/photo1.jpg",
    "/images/featuredPhotos/photo2.jpg",
    "/images/featuredPhotos/photo1.jpg",
    "/images/featuredPhotos/photo2.jpg",
  ]


  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Galeria Skanów</h2>
      <div className={styles.photosSection}>
        <Image src={photoData[showPhoto]} className={styles.mainPhoto} alt="main photo" width={800} height={600} />
        <div className={styles.photoContainer}>
          {photoData.map((photo, index) => (
            <Image src={photo} key={index} onClick={() => setShowPhoto(index)} className={styles.photo} alt="photo" width={400} height={300} />
          ))}
        </div>
      </div>
      <div className={styles.marginBottom} />
    </section>
  )
}

function PricingSection() {
  const [showSection, setShowSection] = useState(0);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Cennik Skanowania</h2>
      <div className={styles.sectionPickerTop}>
        <p className={`${styles.tile} ${showSection === 0 ? styles.tileActive : ''}`} onClick={() => setShowSection(0)}><span className={`icon ${styles.descriptionIcon}`} />Obrazy</p>
        <p className={`${styles.tile} ${showSection === 1 ? styles.tileActive : ''}`} onClick={() => setShowSection(1)}><span className={`icon ${styles.specificationIcon}`} />Przemysłowe</p>
        <p className={`${styles.tile} ${showSection === 2 ? styles.tileActive : ''}`} onClick={() => setShowSection(2)}><span className={`icon ${styles.bulbIcon}`} />Reprinty</p>
      </div>
      <div className={styles.pricingSection}>
        {showSection === 0 && (
          <table>
            <tbody>
              <tr className={styles.tableHeader}>
                <td>Dostępne Opcje</td>
                <td>A1</td>
                <td>A0</td>
                <td>Pełny Stół<br />150 x 100</td>
                <td>4 x Obiekt<br />450 x 200</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>Skanowanie Płaskie</td>
                <td>100 zł</td>
                <td>150 zł</td>
                <td>300 zł</td>
                <td>1500 zł</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>Skanowanie z Ramą</td>
                <td>250 zł</td>
                <td>300 zł</td>
                <td>600 zł</td>
                <td>3000 zł</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>Skanowanie 3D</td>
                <td>350 zł</td>
                <td>450 zł</td>
                <td>900 zł</td>
                <td>4000 zł</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>Skanowanie Strukturalne</td>
                <td>350 zł</td>
                <td>450 zł</td>
                <td>900 zł</td>
                <td>4000 zł</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>Skanowanie Strukturalne <br />z Mapą Połysku i Mapą 3D</td>
                <td>650 zł</td>
                <td>750 zł</td>
                <td>1500 zł</td>
                <td>6000 zł</td>
              </tr>
            </tbody>
          </table>
        )}

        {showSection === 1 && (
          <table>
            <tbody>
              <tr className={styles.tableHeader}>
                <td>Dostępne Opcje</td>
                <td>A1</td>
                <td>A0</td>
                <td>Pełny Stół<br />150 x 100</td>
                <td>4 x Obiekt<br />450 x 200</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>Skanowanie Płaskie</td>
                <td>100 zł</td>
                <td>150 zł</td>
                <td>300 zł</td>
                <td>1500 zł</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>Skanowanie z Ramą</td>
                <td>250 zł</td>
                <td>300 zł</td>
                <td>600 zł</td>
                <td>3000 zł</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>Skanowanie 3D</td>
                <td>350 zł</td>
                <td>450 zł</td>
                <td>900 zł</td>
                <td>4000 zł</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>Skanowanie Strukturalne</td>
                <td>350 zł</td>
                <td>450 zł</td>
                <td>900 zł</td>
                <td>4000 zł</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>Skanowanie Strukturalne <br />z Mapą Połysku i Mapą 3D</td>
                <td>650 zł</td>
                <td>750 zł</td>
                <td>1500 zł</td>
                <td>6000 zł</td>
              </tr>
            </tbody>
          </table>
        )}

        {showSection === 2 && (
          <table>
            <tbody>
              <tr className={styles.tableHeader}>
                <td>Dostępne Opcje</td>
                <td>A0</td>
                <td>A1</td>
                <td>A2</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>2D</td>
                <td>500 zł</td>
                <td>250 zł</td>
                <td>150 zł</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>Strukturalny</td>
                <td>4000 zł</td>
                <td>2200 zł</td>
                <td>1200 zł</td>
              </tr>
            </tbody>
          </table>
        )}

      </div>
    </section>
  )
}

function ContactFormSection() {
  const [formStatus, setFormStatus] = useState("Wyślij");

  async function submitForm(e) {
    e.preventDefault();
    setFormStatus("Wysyłanie...");
    const formData = new FormData(e.target);
    const response = await fetch("/api/send-form", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    const result = await response.json();
    setFormStatus(result.message);
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Skontaktuj się</h2>
      <div className={styles.contactDetails}>
        <Link href="tel:+48 22 716 28 58" className={styles.contactDetailsLink}><span className={`icon ${styles.phoneIcon}`} />+48 22 716 28 58</Link>
        <Link href="mailto:info@skanowanie.pl" className={styles.contactDetailsLink}><span className={`icon ${styles.mailIcon}`} />info@skanowanie.pl</Link>
        <Link href="https://www.skanowanie.pl" className={styles.contactDetailsLink}><span className={`icon ${styles.websiteIcon}`} />www.skanowanie.pl</Link>
        <p className={styles.contactDetailsLink}><span className={`icon ${styles.clockIcon}`} />Pon - Pt <br />09:00 - 16:00</p>
      </div>
      <form className={styles.contactFormSection} onSubmit={submitForm}>
        <div className={styles.row}>
          <label className={styles.inputLabel} htmlFor="name">
            <p>Imię <span className={styles.required}>*</span></p>
            <input type="text" id="name" name="name" required />
          </label>
          <label className={styles.inputLabel} htmlFor="surname">
            <p>Nazwisko</p>
            <input type="text" id="surname" name="surname" />
          </label>
        </div>
        <div className={styles.row}>
          <label className={styles.inputLabel} htmlFor="phone">
            <p>Telefon <span className={styles.required}>*</span></p>
            <input type="tel" id="phone" name="phone" required />
          </label>
          <label className={styles.inputLabel} htmlFor="mail">
            <p>Mail <span className={styles.required}>*</span></p>
            <input type="email" id="mail" name="mail" required />
          </label>
        </div>
        <label className={styles.inputLabel} htmlFor="company">
          <p>Firma</p>
          <input type="text" id="company" name="company" />
        </label>
        <label className={styles.inputLabel} htmlFor="message">
          <p>Wiadomość <span className={styles.required}>*</span></p>
          <textarea id="message" name="message" required />
        </label>
        <label className={styles.checkboxLabel} htmlFor="rodo">
          <input type="checkbox" id="rodo" name="rodo" required />
          <p>Wyrażam zgode na przetwarzanie danych osobowych zgodnie z <Link href="/rodo">RODO</Link> <span className={styles.required}>*</span></p>
        </label>
        <label className={styles.checkboxLabel} htmlFor="marketing">
          <input type="checkbox" id="marketing" name="marketing" />
          <p>Akceptuję <Link href="/rodo">Zgody Marketingowe</Link></p>
        </label>
        <button type="submit">{formStatus}</button>
      </form>
    </section>
  )
}