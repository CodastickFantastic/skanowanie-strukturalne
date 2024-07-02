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
  const reviewsSliderRef = useRef(null);
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
            <ClientFeedbackSection reviewsImgSlider={reviewsSliderRef} />
            {/* SECTION - SIXTH SLIDE CONTENT */}
            {/* <PhotosSection /> */}
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
                <video autoPlay loop muted playsInline>
                  <source src="/video/wynik-z-metisa.webm" type="video/webm" />
                </video>
              </section>
              {/* SECTION - SECOND SLIDE IMG */}
              <section className={styles.imgSection}>
                <video autoPlay loop muted playsInline>
                  <source src="/video/co-skanujemy.webm" type="video/webm" />
                </video>
              </section>
              {/* SECTION - THIRD SLIDE IMG */}
              <section className={styles.imgSection}>
                <video autoPlay loop muted playsInline>
                  <source src="/video/o-metisie.webm" type="video/webm" />
                </video>
              </section>
              {/* SECTION - FOURTH SLIDE IMG */}
              <section className={styles.imgSection}>
                <video autoPlay loop muted playsInline>
                  <source src="/video/w-akcji.webm" type="video/webm" />
                </video>
              </section>
              {/* SECTION - FIFTH SLIDE IMG */}
              <section className={styles.imgSection}>
                <div className={styles.reviewsImgSlider} ref={reviewsSliderRef}>
                  {/* <div className={styles.reviewsImgSliderInner}> */}
                  <Image src="/images/reviews/1.jpg" alt="Zdjęcie 1" width={290} height={580} />
                  <Image src="/images/reviews/2.jpg" alt="Zdjęcie 1" width={290} height={580} />
                  <Image src="/images/reviews/3.jpg" alt="Zdjęcie 1" width={290} height={580} />
                  <Image src="/images/reviews/4.jpg" alt="Zdjęcie 1" width={290} height={580} />
                  <Image src="/images/reviews/5.jpg" alt="Zdjęcie 1" width={290} height={580} />
                  <Image src="/images/reviews/6.jpg" alt="Zdjęcie 1" width={290} height={580} />
                  <Image src="/images/reviews/7.jpg" alt="Zdjęcie 1" width={290} height={580} />
                  {/* </div> */}

                </div>
              </section>
              {/* SECTION - SIXTH SLIDE IMG */}
              {/* <section className={styles.imgSection}>
                <p>Zdjęcie 6</p>
              </section> */}
              {/* SECTION - SEVENTH SLIDE IMG */}
              <section className={styles.imgSection}>
                <video autoPlay loop muted playsInline>
                  <source src="/video/cennik.webm" type="video/webm" />
                </video>
              </section>
              {/* SECTION - EIGHTH SLIDE IMG */}
              <section className={styles.imgSection}>
                <video autoPlay loop muted playsInline>
                  <source src="/video/kontakt.webm" type="video/webm" />
                </video>
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
      <p className={styles.sectionText}>Nasza technologia pozwoli na uzyskanie odwzorowania trójwymiarowych obiektów zamiast płaskich zdjęć - nowość na polskim rynku - skan 3D (strukturalny). Plik uwydatnia całą strukturę przedmiotu skanowanego.<br /><br />Dzięki unikalnemu trybowi METIS SuperScan i formatowi pliku „MDC” wszystkie schematy światła naturalnego są rejestrowane i dostępne w jednym pliku. Co więcej, dzięki oprogramowaniu Light Inspector można w dowolnym momencie uzyskać inny wygląd obrazu, bez konieczności ponownego skanowania oryginału czy fizycznej regulacji oświetlenia.</p>
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
      <p className={styles.sectionText}>Dzięki wykorzystaniu najnowszej technologii jesteśmy w stanie dokonać skanowania strukturalnego niemalże każdej powierzchni.<br /><br />Klienci korzystają z technologii METIS w wielu różnych sektorach rynku dekorów, w szczególności w firmach projektowych i wewnętrznych działach projektowych w zakresie podłóg drewnianych i laminowanych, ceramiki, tapet, tekstyliów, grawerowania płyt i cylindrów pras, druku cyfrowego, reprodukcji dzieł sztuki, CAD i dostawcy usług 3D.
        <br /><br />Skonktaktuj się z nami by poznać szczegóły.</p>
      <div className={styles.featuresHolder}>
        <div className={styles.feature}><span className={`icon ${styles.paintingIcon}`} /><p>Obrazy w ramie lub bez</p></div>
        <div className={styles.feature}><span className={`icon ${styles.posterIcon}`} /><p>Plakaty</p></div>
        <div className={styles.feature}><span className={`icon ${styles.woodIcon}`} /><p>Drewno</p></div>
        <div className={styles.feature}><span className={`icon ${styles.tileIcon}`} /><p>Płytki ceramiczne</p></div>
        <div className={styles.feature}><span className={`icon ${styles.rockIcon}`} /><p>Kamień</p></div>
        <div className={styles.feature}><span className={`icon ${styles.fabricIcon}`} /><p>Materiał</p></div>
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
        {showSection === 0 && <p>Metis DRS 1622 DCS Plus to najnowszy skaner średniej wielkości z laboratorium hi-tech METIS, zaprojektowany specjalnie dla rynków przemysłowych i dekoracyjnych. Oferuje obsługę formatu skanowania do 160 x 100 cm.<br /><br /> Integruje wszystkie najnowocześniejsze technologie METIS z większych formatów, takie jak uchwycenie naturalnych kolorów i wyglądu, dostarcza odpowiednie dane 2D i 3D z rozszerzoną możliwością dostosowania oświetlenia bez potrzeby ponownego skanowania obiektu.<br /><br />Jedyny taki skaner w Polsce!</p>}
        {showSection === 1 && <ul>
          <li>Format skanowania : 160 x 100 cm</li>
          <li>Rozdzielczość optyczna : 1200 PPI przy 160 x 34,5 cm </li>
          <li>Rozdzielczość optyczna : 400 PPI przy pełnym formacie</li>
          <li>Przetwornik obrazu: trójliniowy CMOS 16K, wysoki zakres dynamiki, niski poziom szumów, wysoka wierność kolorów</li>
          <li>Grubość oryginałów: do 12 cm</li>
          <li>Formaty zapisu obrazu: Metis MDC, standardowy TIFF (kolor: 48 lub 24 bity; skala szarości: 16 lub 8 bitów)</li>
        </ul>}
        {showSection === 2 && <p>Nowy i ulepszony system oświetlenia DC Synchrolight zaktualizowany do technologii LED o zwiększonej mocy oświetlenia i oddawania barw. Światło synchronizacyjne DC (dynamicznie sterowane  zsynchronizowane) to technologia METIS chroniona patentem.<br /><br />Opatentowany System Oświetlenia: 8 źródeł światła o zmiennym natężeniu; tysiące różnych schematów świetlnych można uzyskać poprzez przyciemnianie i ustawienie odległości światła (w pełni zautomatyzowane i kontrolowane programowo)<br /><br />Typ źródła światła: Diody LED o wysokim CRI, wolne od IR/UV Wysokiej jakości precyzja/niezawodna mechanika i optyka</p>}
        {showSection === 3 &&
          <>
            <Link href="/broszura_metis.pdf" target="_blank" className={styles.sectionButton}>Pobierz Broszurę Metis</Link>
          </>}
      </div>
      <Image src="/images/metis_logo.jpg" alt="Logo Metis" className={styles.metisLogo} width={300} height={126} />
      <div className={styles.marginBottom} />
    </section>
  )
}

function VideoSection({ sliderRefLeftCol }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Proces Digitalizacji Obiektów</h2>
      <p className={styles.sectionText}>Zobacz krok po kroku, jak wygląda proces tworzenia skanów strukturalnych w naszej firmie. Przekonaj się, że jesteśmy jedynym słusznym wyborem. <br /><br />1. Rozpoczynamy od rozmowy, aby zrozumieć potrzeby i oczekiwania Klienta. Określamy cel skanowania.<br /><br />2. Dokładnie kalibrujemy nasze urządzenia, aby zapewnić, że uzyskane skany będą wiernie odwzorowywać rzeczywistość.<br /><br />3. Przeprowadzamy skanowanie zgodnie z ustalonymi wcześniej procedurami. </p>
      <video className={styles.sectionVideo} autoPlay loop muted playsInline>
        <source src="/video/w-akcji.webm" type="video/webm" />
      </video>
      <div className={styles.marginBottom} />
    </section>
  )
}

function ClientFeedbackSection({ sliderRefLeftCol, reviewsImgSlider }) {
  const sliderRef = useRef(null)
  let preventSliderScroll = false
  let preventImgSliderScroll = false

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

  function nextFedbackImg() {
    const maxScroll = reviewsImgSlider.current.clientWidth * (reviewsImgSlider.current.children.length - 1)

    if (!preventImgSliderScroll) {
      setTimeout(() => {
        preventImgSliderScroll = false
      }, 500)
      if (reviewsImgSlider.current.scrollLeft + 4 < maxScroll) {
        preventImgSliderScroll = true
        reviewsImgSlider.current.scrollBy({ left: reviewsImgSlider.current.clientWidth, behavior: 'smooth' })
      } else {
        preventImgSliderScroll = true
        reviewsImgSlider.current.scrollBy({ left: -maxScroll, behavior: 'smooth' })
      }
    }
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Zadowoleni Klienci</h2>
      <div className={styles.feedbackContainer} ref={sliderRef}>
        <div className={styles.feedback}>
          <p className={styles.feedbackContent}>„Jestem bardzo zadowolona z obsługi w Państwa firmie. Zaobserwowałam, że: 1. Obsługa klienta jest na najwyższym poziomie - kompetencja pracowników, rewelacyjna komunikacja, rzeczowość, słowność, życzliwość. 2. Jakość skanów wspaniała. Na pewno będę korzystać z Państwa usług. Do rychłego zobaczenia!”</p>
          <div className={styles.feedbackFooter}>
            <p className={styles.feedbackAuthor}>~ AdrienneArtPouring</p>
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
          <p className={styles.feedbackContent}>„Z firmą Skanowanie.pl współpracuję już od dłuższego czasu. Moje obrazy są skanowane "od ręki". Jestem bardzo zadowolony z naszej współpracy i oczywiście nadal będę ją kontynuować. Kontakt z firmą również jest na najwyższym poziomie, tak samo jak skany moich prac.”</p>
          <div className={styles.feedbackFooter}>
            <p className={styles.feedbackAuthor}>~ Wojciech Brewka</p>
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
          <p className={styles.feedbackContent}>@profiholiday<br />
            „W zasadzie uratowaliście nam życie, bo nigdzie nie było dostępności płaskich skanerów. A jeśli chodzi o sam kontakt i obsługę to daje 5/5 no i bardzo fajna atmosfera na miejscu – podczas oczekiwania na skany. Także wszystko na tip-top , polecam!”</p>
          <div className={styles.feedbackFooter}>
            <p className={styles.feedbackAuthor}>~ Dawid Bobrowski</p>
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
          <p className={styles.feedbackContent}>„Z głębokim przekonaniem doradzam i polecam skorzystanie z usług skanowanie.pl. Jakość usług oferowanych przez tę firmę stoi na najwyższym poziomie. Dostępne jedynie tu, wielkoformatowe płaskie skanery, pozwalają na bardzo precyzyjne fotografowanie nawet bardzo dużych arkuszy. Niezwykła jakość skanowania i idealne odwzorowanie kolorów, pozwala na wykorzystanie go w każdym obszarze wymagającym takich parametrów. Współpraca z pracownikami skanowanie.pl jest czystą przyjemnością.”</p>
          <div className={styles.feedbackFooter}>
            <p className={styles.feedbackAuthor}>~ Dr Daniel Zarewicz</p>
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
          <p className={styles.feedbackContent}>„Wykonałem kilkanaście skanów moich obrazów w skanowanie.pl. Za każdym razem mogłem liczyć na profesjonalizm, rzetelność i wysoką jakość skanowania potrzebną mi do przygotowywania wysokiej jakości reprodukcji moich obrazów.”</p>
          <div className={styles.feedbackFooter}>
            <p className={styles.feedbackAuthor}>~ Krzysztof Kargol</p>
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
          <p className={styles.feedbackContent}>„Odkrycie usług firmy Skanowanie.pl (dawniej Mikrofilm-Service) było kamieniem milowym w budowaniu mojej kariery artystycznej. Profesjonalne skanowanie okazało się najlepszą z możliwych opcji na wierne odwzorowanie kolorów i faktur moich obrazów. Dzięki temu mogę archiwizować swoje obrazy na komputerze oraz sprzedawać ich kopie jako plakaty (i nie tylko!). Tego nie zastąpi nawet najlepsza fotografia. Szczerze polecam usługi firmy wszystkim tym, którzy zastanawiają się jak bez utraty jakości zdigitalizować to, co tworzą.”</p>
          <div className={styles.feedbackFooter}>
            <p className={styles.feedbackAuthor}>~ Ewelina Czarnecka</p>
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
          <p className={styles.feedbackContent}>„Fantastyczna jakość skanów, doskonałe odwzorowanie kolorów. Profesjonalny i pomocny personel. Od jakiegoś czasu szukaliśmy firmy, z którą będziemy mogli stale współpracować w zakresie wysokojakościowych skanów obrazów i myślę, że znaleźliśmy tę właściwą firmę! Bardzo pomocna i zaangażowana obsługa klienta, nie ma rzeczy niemożliwych, do tego rozumiemy się już bez słów. Pełen profesjonalizm!”</p>
          <div className={styles.feedbackFooter}>
            <p className={styles.feedbackAuthor}>~ FineArtPrints.pl</p>
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
        <button className={styles.sectionButton} onClick={() => { nextFeedback(); nextFedbackImg() }}>Pokaż Kolejną Opinię <span className={`icon ${styles.arrowIcon}`} /></button>
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
          <>
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
            <p className={styles.sectionText} style={{ marginTop: '12px' }}>Deski, ceramika, tekstylia bądź inny trudny materiał: stawka x2</p>
          </>
        )}

        {showSection === 2 && (
          <>
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
            <p className={styles.sectionText} style={{ marginTop: '12px' }}>Druk na papierze lub płótnie. Więcej informacji www.drukstrukturalny.pl</p>
          </>
        )}
        <p className={styles.sectionText} style={{ marginTop: "24px" }}>Chcesz zdigitalizować wiele różnych obiektów? Napisz do nas – pomożemy w wycenie Twojego projektu.</p>
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