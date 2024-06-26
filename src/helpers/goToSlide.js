export default function goToSlide(sliderRef, slideIndex, isNavbar = false) {
    if (isNavbar) {
        const newTopPosition = slideIndex * sliderRef.clientHeight
        sliderRef.style.top = `-${newTopPosition}px`
    } else {
        const newTopPosition = slideIndex * sliderRef.current.clientHeight
        sliderRef.current.style.top = `-${newTopPosition}px`
    }
}

