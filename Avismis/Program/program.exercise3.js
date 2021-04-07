// Model a CrowdFunding platform, a project is defined by the GOAL, which is an amount of money they need to raise.
// The project has a description and also an end date, the project will have tiers that offer interesting rewards to
// funders, like the following
// Tier 1: 50€ - A T-shirt with my face in it
// Tier 2: 100€ - A T-shirt with my face in it and a set of stickers with my face
// Tier 3: 150€ - A T-shirt with my face in it, and a set of stickers with my face and a cup with my face
// There must be a way of keeping track of all the funders and their funding
// There must be a way of telling how much is left to get to the goal
// When a user provides funding they will receive the reward according to the tiers

const GOAL = function (salute, moneyGoal, endDate) {

    const fiftyEurosWinners = [];
    const hundredEurosWinners = [];
    const hundredHalfEurosWinners = [];
    const twoHundredEurosWinners = [];

    return {
        salute,
        moneyGoal,
        endDate,
        fiftyEurosWinners,
        hundredEurosWinners,
        hundredHalfEurosWinners,
        twoHundredEurosWinners,
        rewardOrganizer: function (name, email, donation) {
            if (donation >= 50 && donation < 100) {
                fiftyEurosWinners.push(name, email, donation)
                return "Congrats, you just won a t-shirt with my face in it"
            } else if (donation >= 100 && donation < 150) {
                hundredEurosWinners.push(name, email, donation)
                return "Congrats, you just won a t-shirt with my face in it, and a sticker with my face too"
            } else if (donation >= 150 || donation < 200) {
                hundredHalfEurosWinners.push(name, email, donation)
                return "Congrats, you just won a t-shirt with my face in it, a sticker with my face too and a magic mug with my body"
            } else if (donation >= 200) {
                twoHundredEurosWinners.push(name, email, donation)
                return "Congrats, you just won a facial surgery so you can have my face instead of yours"
            } else {
                return "Thanks sucker, now im closer to get my PS5"
            }
        }
    }
}
    const Salute = "Hello! We are a group of serious and decent people, and not just a loser in his parents basement and we are looking for reaching 1000 Euros profits to help a charity organization " +
        "and not because I want to buy the new PlayStation 5 or anything. I... I mean, we need to have the money before september the 25th, " +
        "there is plenty of time so start emptying your pockets you muthafack#$%" +
        "Thanks for the cooperation, you can always add me to your PSPlus profile, my ID is 'hard as a rock (the face)'"

    const blabla = GOAL(Salute, '1000', 'Sept 25th')
blabla.rewardOrganizer('Luis', 'dfgjkdfd', 150)
console.log(blabla.rewardOrganizer('Pepa', 'dsfsdsf', 200))
console.log(blabla.hundredHalfEurosWinners)
console.log(blabla.rewardOrganizer('Mongui', 'dsgfdsfsd', 25))
