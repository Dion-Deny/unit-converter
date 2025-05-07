let input = document.querySelector("#inputvalue")
let lengthConversion = document.querySelector(".lengthconversion")
let volumeConversion = document.querySelector(".volumeconversion")
let massConversion = document.querySelector(".massconversion")
const convertBtn = document.querySelector(".convert-btn")


convertBtn.addEventListener("click", function(){
   convertLength()
   convertVolume()
   convertMass()
})

function convertLength(){
    let inputValue = input.value
    let feetValue = (inputValue*3.28084).toFixed(3)
    let meterValue = (inputValue/3.28084).toFixed(3)

    lengthConversion.innerHTML = `<p>${inputValue} meters = ${feetValue} feet | ${inputValue} feets = ${meterValue} meters </p>`

}

function convertVolume(){
    let inputValue = input.value
    let gallonsValue = (inputValue*0.264172).toFixed(3)
    let litersValue = (inputValue*3.78541).toFixed(3)

    volumeConversion.innerHTML=`<p> ${inputValue} liters = ${gallonsValue} gallons | ${inputValue} gallons = ${litersValue} liters`
}

function convertMass(){
    let inputValue = input.value
    let poundsValue = (inputValue*2.20462).toFixed(3)
    let kilosValue = (inputValue/2.20462).toFixed(3)

    massConversion.innerHTML=`<p> ${inputValue} kilos = ${poundsValue} pounds | ${inputValue} pounds = ${kilosValue} kilos`
}
console.log("2nd Updated Version")