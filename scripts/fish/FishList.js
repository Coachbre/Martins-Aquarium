/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module

import { getFish } from "./FishData.js"

import { Fish } from "./Fish.js"

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishListContainer")
    const fishesArray = getFish();

    let storeFishHtml = "";
    

    for (const singleFish of fishesArray) {


        storeFishHtml += Fish(singleFish)

    }
 
    contentElement.innerHTML += `
        <section class="fishList">
            ${storeFishHtml}
        </section>
    `
}