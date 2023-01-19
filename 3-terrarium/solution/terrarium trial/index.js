const leftPlantHolder = document.getElementById("left-container")
const rightPlantHolder = document.getElementById("right-container")

function populateImages() {
    for (let i = 1; i <= 6; i++) {
        leftPlantHolder.innerHTML += `            
        <div class="plant-holder">
            <img class="plant" alt="plant${i}" id="plant${i}" src="./images/plant${i}.png" />
        </div>
    `
    }

    for (let i = 7; i <= 12 ; i++) {
        rightPlantHolder.innerHTML += `            
        <div class="plant-holder">
            <img class="plant" alt="plant${i}" id="plant${i}" src="./images/plant${i}.png" />
        </div>
    `  
    }
}