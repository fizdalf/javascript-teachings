// Model a CrowdFunding platform, a project is defined by the GOAL, which is an amount of money they need to raise.
// The project has a description and also an end date, the project will have tiers that offer interesting rewards to
// funders, like the following
// Tier 1: 50€ - A T-shirt with my face in it
// Tier 2: 100€ - A T-shirt with my face in it and a set of stickers with my face
// Tier 3: 150€ - A T-shirt with my face in it, and a set of stickers with my face and a cup with my face
// There must be a way of keeping track of all the funders and their funding
// There must be a way of telling how much is left to get to the goal
// When a user provides funding they will receive the reward according to the tiers
"use strict";
const CrowdFunding = function (goal, description, dateOfFinish) {
    const listOfDonors = new Map();

    return {
        goal,
        description,
        dateOfFinish,
        Tier(tier1, tier2, tier3) {
            return {
                tier1: 50,
                tier2: 100,
                tier3: 150,
            }
        },
        getDonor(nameOfDonor, donatedMoney) {
            const lowerCaseName = nameOfDonor.toLowerCase();
            if (listOfDonors.has(nameOfDonor)) {
                listOfDonors.set(lowerCaseName, donatedMoney);
            }
            listOfDonors.set(lowerCaseName, donatedMoney);
        },
        howMuchToGoal(moneyFounded) {
            return this.goal - moneyFounded
        },
        rewardUser(nameOfDonor, tier) {

            const message = "You won a T-short with your face"
            this.getDonor(tier)
            if (nameOfDonor === tier1) {
                return message
            }
            if (nameOfDonor === tier2) {
                return message + "and a set of stickers with my face"
            }
            if (nameOfDonor === tier3) {
                return message + "and a set of stickers with my face, and a cup with my face"
            }

        }
    }
}

const found1 = CrowdFunding(2000, "me duele el culo", "2021-10-12")

console.log(found1.goal);



