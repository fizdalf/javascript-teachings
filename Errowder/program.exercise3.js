// Model a CrowdFunding platform, a project is defined by the GOAL, which is an amount of money they need to raise.
// The project has a description and also an end date, the project will have tiers that offer interesting rewards to
// funders, like the following
// Tier 1: 50€ - A T-shirt with my face in it
// Tier 2: 100€ - A T-shirt with my face in it and a set of stickers with my face
// Tier 3: 150€ - A T-shirt with my face in it, and a set of stickers with my face and a cup with my face
// There must be a way of keeping track of all the funders and their funding
// There must be a way of telling how much is left to get to the goal
// When a user provides funding they will receive the reward according to the tiers

const CrownFundingPlatform = function (goal, description, endDate) {
    const founders = new Map();
    let money = 0
    return {
        getFoundersInformation: function (foundersName, founding) {
            if (founding < 0) {
                throw Error("No me intentes robar")
            }
            if (founding >= goal) {
                throw Error("Voy a llorar de la emoSion")
            }
            founders.set(foundersName, founding)
            money = (founding + money)
            return founders;
        },
        getHowMuchIsLeftToReachTheGoal: function () {
            const moneyNeededToRaise = goal - money
            return moneyNeededToRaise
        },
        getYourReward: function (founding) {
            if (founding < 50) {
                console.log("sigue asi y conseguiras premios")
            }
            if (founding >= 50 && founding < 100) {
                console.log("You have received" + " = " + "A T-shirt with my face in it" + " Congratulations")
            }
            if (founding >= 100 && founding < 150) {
                console.log("You have received" + " = " + "A T-shirt with my face in it and a set of stickers with my face" + " Congratulations")
            }
            if(founding >= 150) {
                console.log("You have received" + " = " + "A T-shirt with my face in it, a set of stickers with my face and a cup with my face" + " Congratulations")
            }
        }
    }
}

const empresa = CrownFundingPlatform(500, "es una empresa que quiere ganar dinero", "2021-04-07")

console.log(empresa.getFoundersInformation("alvaro", 75))
console.log(empresa.getHowMuchIsLeftToReachTheGoal())
console.log(empresa.getYourReward(45))