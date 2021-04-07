// Model a CrowdFunding platform, a project is defined by the GOAL, which is an amount of money they need to raise.
// The project has a description and also an end date, the project will have tiers that offer interesting rewards to
// funders, like the following
// Tier 1: 50€ - A T-shirt with my face in it
// Tier 2: 100€ - A T-shirt with my face in it and a set of stickers with my face
// Tier 3: 150€ - A T-shirt with my face in it, and a set of stickers with my face and a cup with my face
// There must be a way of keeping track of all the funders and their funding
// There must be a way of telling how much is left to get to the goal
// When a user provides funding they will receive the reward according to the tiers

let project = {
    Funder: "CrowdFundingPlatform",
    Tier1: 50 + " A T-shirt with my face in it ", //  "50 A T-shirt with my face in it "
    Tier2: 100 + " A T-shirt with my face in it and a set of stickers with my face",
    Tier3: 150 + " A T-shirt with my face in it, and a set of stickers with my face and a cup with my face",
    EndDate: "2021-05-21"

}

let array = []

// There must be a way of keeping track of all the funders and their funding
function keepTrackOfFundersAndFundings(funder, funding) {
    let max = array.length;
    for (let i = 0; i < max; i++) {
        array.push(funder + " " + funding) //
    }
    return
}

// There must be a way of telling how much is left to get to the goal


function money(moneyYouHaveNow, goal) {
    return moneyYouHaveNow - goal
}

// When a user provides funding they will receive the reward according to the tiers

function costOfRewards(numberOfRewards, costPerReward) {
    return numberOfRewards * costPerReward
}

function tiers(numberOftierSold, costOftypeOfTier) {
    let tier1 = 50
    let reward1 = " A T-shirt with my face in it "
    let tier2 = 100
    let reward2 = " A T-shirt with my face in it and a set of stickers with my face"
    let tier3 = 150
    let reward3 = " A T-shirt with my face in it, and a set of stickers with my face and a cup with my face"
    if (costOftypeOfTier === tier1) {
        reward1 = numberOftierSold + "T-shirt with my face in it "
    }
    if (costOftypeOfTier === tier2) {
        reward2 = numberOftierSold + "T-shirt with my face in it and a set of stickers with my face"
    }
    if (costOftypeOfTier === tier3) {
        reward3 = numberOftierSold + "T-shirt with my face in it, and a set of stickers with my face and a cup with my face"
    }
    return
}

