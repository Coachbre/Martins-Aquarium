// Renders individual tip objects as html

import { getTip } from "./TipData.js"

import { Tip } from "./Tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".tipListContainer")
    const tipArray = getTip();

    let storeTipHtml = "";

    for (const eachTip of tipArray) {

        storeTipHtml += Tip(eachTip)
    }

    contentElement.innerHTML += `
    <section class="tipList">
        ${storeTipHtml}
    </section>
    `
}