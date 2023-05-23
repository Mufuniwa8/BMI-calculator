
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let display = document.getElementById('output');
let displayText = document.getElementById('output-text');

let calc = ()=>{
    let bMi = (weight.value / ((height.value * height.value) 
    / 10000)).toFixed(2);
    
    console.log(bMi);
    display.value += parseInt(bMi)
    if (bMi <= 18.4){
       displayText.value += 'underweight'
       console.log('underweight');
    }
    else if (bMi <= 18.5 || bMi<= 24.4) {
       displayText.value += 'Normal'
       console.log('Normal');
    }
    else if (bMi <= 25.0 || bMi<= 39.9) {
        displayText.value += 'overweight'
        console.log('overweight');
    }
    else if (bMi <= 40.0 ) {
        displayText.value += 'Obese'
        console.log('Obese');
    } 
    
}


let clearAll = () => {
    location.reload()
    
}
// display.textContent = '';
    // displayText.textContent = '';












