let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")






function increaseMultiPoints(points, team) {
    console.log(team)
    if (team === 'home') {
        homeScore += points;
        homeScoreEl.textContent = homeScore;

    } else if (team === 'guest') {
        guestScore += points;
        guestScoreEl.textContent = guestScore
    }
}
try {


} catch (error) {

}