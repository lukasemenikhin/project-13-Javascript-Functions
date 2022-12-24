function calcAverage(a, b, c) {
    return (a + b + c) / 3;
}

let gogebisAvg = calcAverage(44, 23, 71);
let bichebisAvg = calcAverage(65, 54, 49);

console.log(gogebisAvg, bichebisAvg);

function checkWinner(gogebisAvg, bichebisAvg) {
    if (gogebisAvg > 2 * bichebisAvg) {
        console.log("moiges gogoebma (" + gogebisAvg + " vs " + bichebisAvg + ")");
    } else if (bichebisAvg > 2 * gogebisAvg) {
        console.log("moiges biwebma (" + bichebisAvg + " vs " + gogebisAvg + ")");
    } else {
        console.log("veravin ver moigo.");
    }
}

checkWinner(20, 50);