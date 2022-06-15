/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Harry Potter and
    Voldemort.
*/ 

let potterAttack = 20
let voldemortAttack = 30

if (voldemortAttack > potterAttack){
    console.log('Voldemort has a better attack than Potter.')
} else if (potterAttack > voldemortAttack){
    console.log('Potter has a better attack than Vodlemort.')
} else {
    console.log('Voldemort and Potter have the same attack.')
}

let potterHealth = 100
let potterDefense = 0

if(potterHealth > voldemortAttack){
   potterHealth -= voldemortAttack
   console.log(`Potter's health is now ${potterHealth}`);
} else {
    console.log('Potter was slain.')
}
potterDefense += 25

for(let i = 0; i < 5; i++){
    let damage = voldemortAttack - potterDefense
    potterHealth -= damage
    console.log(`Potter's health is now ${potterHealth}`)
}

while(potterHealth > 0){
    let damage = voldemortAttack - potterDefense
    potterHealth -= damage
if(potterHealth > 0){
    console.log(`Potter's health is now ${potterHealth}`)
} else {
        console.log('Potter has been slain.')
}
}