export const getTeamNames = async () => (await (
    await fetch("/teams.json")
).json()).body



