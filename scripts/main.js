import { Fish } from "./scripts/fish/Fish.js"

import { getFish } from "./scripts/fish/Data.js"

const allTheFish = getFish()

for (const fish of allTheFish) {
    console.log(fish)
}

import { FishList } from "./scripts/fish/FishList.js"

FishList ()

 
