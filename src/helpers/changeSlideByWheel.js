// Scroll States To Prevent All Page Scroll by Mistake
let preventScrollLeft = false
let preventScrollRight = false

export function changeSlideByWheelLeftCol(sliderRefLeftCol) {

    if (preventScrollLeft === false) {
        preventScrollLeft = true
        setTimeout(() => {
            preventScrollLeft = false
        }, 500)

        const scrollBy = sliderRefLeftCol.current.clientHeight
        const maxTopPosition = -sliderRefLeftCol.current.scrollHeight + window.innerHeight;
        let currentTopPosition = sliderRefLeftCol.current.style.top || 0

        if (typeof currentTopPosition === "string") {
            currentTopPosition = parseInt(currentTopPosition.replace("px", ""))
        }

        if (event.deltaY > 0) {
            if (currentTopPosition > maxTopPosition) {
                const newTopPosition = currentTopPosition - scrollBy
                sliderRefLeftCol.current.style.top = `${newTopPosition}px`
            }
        } else {
            if (currentTopPosition !== 0) {
                const newTopPosition = currentTopPosition + scrollBy
                sliderRefLeftCol.current.style.top = `${newTopPosition}px`
            }
        }
    }
}

export function changeSlideByWheelRightCol(sliderRefRightCol) {

    if (preventScrollRight === false) {
        preventScrollRight = true
        setTimeout(() => {
            preventScrollRight = false
        }, 500)

        const scrollBy = sliderRefRightCol.current.clientHeight
        const maxTopPosition = -sliderRefRightCol.current.scrollHeight + 2 * scrollBy;
        let currentTopPosition = sliderRefRightCol.current.style.top || 0

        if (typeof currentTopPosition === "string") {
            currentTopPosition = parseInt(currentTopPosition.replace("px", ""))
        }

        if (event.deltaY > 0) {
            if (currentTopPosition > maxTopPosition) {
                const newTopPosition = currentTopPosition - scrollBy
                sliderRefRightCol.current.style.top = `${newTopPosition}px`
            }
        } else {
            if (currentTopPosition !== 0) {
                const newTopPosition = currentTopPosition + scrollBy
                sliderRefRightCol.current.style.top = `${newTopPosition}px`
            }
        }
    }
}