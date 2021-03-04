// Tip renders each tip object (each actual value from tip collection) as html

export const Tip = (tipObj) => {

return `
<article class="tip-card">
    <h2 class= "care">${tipObj.care}</52>
    <ul>
        <li class="tip-details">Habitat: ${tipObj.habitat}</li>
        <li class="tip-details">Cleaning tools: ${fishObj.cleaning}</li>
        <li class="tip-details">Feeding schedule: ${fishObj.schedule}</li>
    </ul>
</article>`

}
