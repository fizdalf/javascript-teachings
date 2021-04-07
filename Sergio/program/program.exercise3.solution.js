// Model a CrowdFunding platform, a project is defined by the GOAL, which is an amount of money they need to raise.
// The project has a description and also an end date, the project will have tiers that offer interesting rewards to
// funders, like the following
// Tier 1: 50€ - A T-shirt with my face in it
// Tier 2: 100€ - A T-shirt with my face in it and a set of stickers with my face
// Tier 3: 150€ - A T-shirt with my face in it, and a set of stickers with my face and a cup with my face
// There must be a way of keeping track of all the funders and their funding
// There must be a way of telling how much is left to get to the goal
// When a user provides funding they will receive the reward according to the tiers

const CrowdFunding = function (goal, description, dateOfFinish, moneyFounded) {
    const listOfDonors = new Map();

    return {
        goal,
        description,
        dateOfFinish,
        moneyFounded,
        howManyToGoal() {
            if (moneyFounded >= goal) {
                return "we get the goal!!"
            }
            return goal - moneyFounded
        },
        getDonor(nameOfDonor, donatedMoney) {
        const lowerCaseName = nameOfDonor.toLowerCase();
        if (listOfDonors.has(nameOfDonor)) {
            listOfDonors.set(lowerCaseName, donatedMoney);
        }
        listOfDonors.set(lowerCaseName, donatedMoney);
        },
        rewardUser(nameOfDonor, donatedMoney) {

            const message = "You won a T-short with your face"
            if (donatedMoney >= 50 && donatedMoney < 100) {
                listOfDonors.set(nameOfDonor, donatedMoney)
                return message
            } else if (donatedMoney >= 100 && donatedMoney < 150) {
                listOfDonors.set(nameOfDonor, donatedMoney)
                return message + "and a set of stickers with my face"
            } else if (donatedMoney >= 150) {
                listOfDonors.set(nameOfDonor, donatedMoney)
                return message + "and a set of stickers with my face, and a cup with your face"
            } else {
                return "donate me or I'll burn your house"
            }
        }
    }
}

const found1 = CrowdFunding(2000, "me duele el culo", "2021-10-12")

