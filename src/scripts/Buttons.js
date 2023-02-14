import { Reservations } from "./Reservations.js"


export const Buttons = () => {
    return `
    <h1>Buttons & Lollipop Clowning Service</h1>
    <section class="serviceForm">
        
    </section>

    <section class="serviceRequests">
        <h2>Clowning Reservations</h2>
        ${Reservations()}
    </section>
    `
}