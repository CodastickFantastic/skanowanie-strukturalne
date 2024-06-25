export default function useTouchEvents() {
    let touchStartY = 0
    let touchEndY = 0

    function checkDirection() {
        if (touchEndY === touchStartY) return

        if (touchEndY + 60 < touchStartY) {
            return "next"
        }
        if (touchEndY - 60 > touchStartY) {
            return "prev"
        }
    }

    const onTouchStart = (e) => {
        touchStartY = e.changedTouches[0].screenY
    }

    const onTouchEnd = (e, sliderRefLeftCol) => {
        touchEndY = e.changedTouches[0].screenY
        changeSlideTouchLeftCol(checkDirection(), sliderRefLeftCol)
    }

    return { onTouchStart, onTouchEnd }
}

function changeSlideTouchLeftCol(direction, sliderRefLeftCol) {
    const scrollBy = window.innerHeight
    const maxTopPosition = -sliderRefLeftCol.current.scrollHeight + window.innerHeight;
    let currentTopPosition = sliderRefLeftCol.current.style.top || 0

    if (typeof currentTopPosition === "string") {
        currentTopPosition = parseInt(currentTopPosition.replace("px", ""))
    }

    if (direction === "next") {
        if (currentTopPosition > maxTopPosition) {
            const newTopPosition = currentTopPosition - scrollBy
            sliderRefLeftCol.current.style.top = `${newTopPosition}px`
        }
    } else if (direction === "prev") {
        if (currentTopPosition !== 0) {
            const newTopPosition = currentTopPosition + scrollBy
            sliderRefLeftCol.current.style.top = `${newTopPosition}px`
        }
    }
}