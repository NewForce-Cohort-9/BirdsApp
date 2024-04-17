import { getBirds } from "./database.js";


export const birdList = () => {

const allBirds = getBirds()

let birdListHTML = `<div class="bird-list">`


for (const bird of allBirds){
    birdListHTML +=  `
    <h1>${bird.name}</h1>
    <h4>${bird.species}</h4>`
    if(bird.isEnemy === true){
        birdListHTML += `<div class="bird-card foe">
        <div>
         <img class="birdImage" src="https://cdn.pixabay.com/photo/2023/08/18/13/45/ai-generated-8198579_1280.jpg" alt="will add later">
         </div>
        <ul class="bird-details">
        <li>Battery: ${bird.battery}</li>
        <li>Current Version: ${bird.version}</li>
        <li>Threat Level: ${bird.threatLV}</li>
        </ul>
        </div>`
    }
    else {

        birdListHTML += `<div class="bird-card friend">
        <div>
         <img class="birdImage" src="https://cdn.pixabay.com/photo/2023/08/18/13/45/ai-generated-8198579_1280.jpg" alt="will add later">
         </div>
        <ul class="bird-details">
        <li>Battery: ${bird.battery}</li>
        <li>Current Version: ${bird.version}</li>
        <li>Threat Level: ${bird.threatLV}</li>
        </ul>
        </div>`


    }
    
}          

    birdListHTML += `</div>`

    return birdListHTML
}

