export const targetPlayer = {
    boost: 34
}

export const setTargetPlayerBoost = (boost) => {
    targetPlayer.boost = boost

    console.log("Target player boost set:", targetPlayer.boost)
}