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

        addFunding: function (foundersName, funding) {
            if (funding < 0) {
                throw Error("No me intentes robar")
            }
            if (funding >= goal) {
                throw Error("Voy a llorar de la emoSion")
            }
            let previousFunding = 0;
            if (founders.has(foundersName)) {
                previousFunding = founders.get(foundersName);
            }
            founders.set(foundersName, funding + previousFunding);
            money += funding;
        },
        funders() {
            return founders;
        },
        getHowMuchIsLeftToReachTheGoal: function () {
            return goal - money
        },
        getYourReward: function (name) {
            const fundedAmount = founders.get(name);
            if (fundedAmount < 50) {
                console.log("sigue asi y conseguiras premios")
            } else if (fundedAmount >= 50 && fundedAmount < 100) {
                console.log("You have received = A T-shirt with my face in it Congratulations")
            } else if (fundedAmount >= 100 && fundedAmount < 150) {
                console.log("You have received" + " = " + "A T-shirt with my face in it and a set of stickers with my face" + " Congratulations")
            } else {
                console.log("You have received" + " = " + "A T-shirt with my face in it, a set of stickers with my face and a cup with my face" + " Congratulations")
            }
        }
    }
}

const empresa = CrownFundingPlatform(500, "es una empresa que quiere ganar dinero", "2021-04-07")

empresa.addFunding("alvaro", 75);
empresa.addFunding("alvaro", 75);
console.log(empresa.funders())
console.log(empresa.getHowMuchIsLeftToReachTheGoal())
empresa.getYourReward("alvaro");
