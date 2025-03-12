// Code your solutions in this file

function writeCards(letter, houston){
    let myArray=[];
    for (let i = 0; i < letter.length; i++) {
        myArray.push(`Thank you, ${letter[i]}, for the wonderful ${houston} gift!`)
    }
    return myArray;
}
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

