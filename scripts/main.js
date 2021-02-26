import { Fish } from "./Fish.js"

import { getFish } from "./Data.js"




const allTheFish = getFish()

for (const fish of allTheFish) {
    console.log(`the name of the fish is ${fish.name}. It is a good fish`)
}

