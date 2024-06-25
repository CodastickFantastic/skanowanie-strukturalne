export default function goToSlide(sliderRef, slideIndex) {
    const newTopPosition = slideIndex * sliderRef.current.clientHeight
    sliderRef.current.style.top = `-${newTopPosition}px`
}