// Fish Data Main JS info

import { Fish } from "./fish/Fish.js"

import { getFish } from "./fish/FishData.js"

const allTheFish = getFish()

for (const fish of allTheFish) {
    console.log(fish)
}

import { FishList } from "./fish/FishList.js"

FishList ()
 
// Tip Data Main JS info
 
import { Tip } from "./tips/Tip.js"

import { getTip } from "./tips/TipData.js"

const allTheTips =  getTip()

for (const tip of allTheTips) {
    console.log(tip)
}

import { TipList } from "./tips/TipList.js"

TipList ()

// Location Data Main JS info

import { Location } from "./location/Location.js"

import { getLocation } from "./location/LocationData.js"

const allTheLocations =  getLocation()

for (const location of allTheLocations) {
    console.log(location)
}

import { LocationCollection } from "./location/LocationList.js"

LocationCollection ()
