// Renders individual location objects as html

import { getLocation } from "./LocationData.js"

import { Location } from "./Location.js"

export const LocationCollection = () => {

    const contentElement = document.querySelector(".locationCollectionContainer")
    const locationArray = getLocation();

    let storeLocationHtml = "";

    for (const eachLocation of locationArray) {

        storeLocationHtml += Location(eachLocation)
    }

    contentElement.innerHTML += `
    <section class="LocationList">
        ${storeLocationHtml}
    </section>
    `
}