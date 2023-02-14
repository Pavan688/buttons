import { getReservations } from "./dataAccess.js"

let reservationToHtml = (reservation) => {
    return `<li>`
}

export const Requests = () => {
    const reservations = getReservations()

    let html = `
        <ul>
            ${
                reservations.map().join("")
            }
        </ul>
    `

    return html
}