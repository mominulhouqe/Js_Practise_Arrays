
// Task-8
// Create a function called highScore That will 
// Recive a 1 d array called scrores
// return the highest Score


function HighesScore(score){
    let max = score[0];
    for (let i = 1; i <score.length ; i++) {
       if (max< score[i]) {
        max = score[i];
       }
   
    }
    return max;

}

let score = [23,232,234,34,123,456];

let maxScore = HighesScore(score);
console.log("The Max Number is = " + maxScore);
