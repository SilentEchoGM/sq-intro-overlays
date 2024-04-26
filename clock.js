export const formatClock = (seconds, ot) => {
    const minutes = Math.max(Math.floor(seconds / 60), 0)
    const remainingSeconds = Math.max(seconds % 60, 0)

    return `${ot ? "+" : ""}${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

export const setClock = (seconds, ot) => {
    document.querySelector(".clock").innerHTML = formatClock(seconds, ot)
}