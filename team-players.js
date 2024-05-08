import { tweened } from "svelte/motion";

export const getTeamPlayerElements = (index, name) => {
  const el = document.createElement("div");
  el.classList.add("player");
  el.id = `player-${index}`;

  el.innerHTML = `
<div id="name">${name}</div>
<div id="boost-value"></div>
<div id="boost-track">
  <div id="boost-fill"></div>
</div>
`;

  return el;
};

export const getTeamPlayers = (players) => {
  const blue = Object.values(players)
    .filter((player) => player.team === 0)
    .sort((a, b) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

  const orange = Object.values(players)
    .filter((player) => player.team === 1)
    .sort((a, b) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

  return { blue, orange };
};

export const playerElements = {};
export const playerBoost = {};

export const updateTeamPlayerHtml = (players) => {
  Object.values(players)
    .filter((player) => !Object.keys(playerElements).includes(player.id))
    .forEach((player, i) => {
      const el = getTeamPlayerElements(i, player.name);

      playerElements[player.id] = el;
      document
        .querySelector(`.team-players#${player.team === 0 ? "blue" : "orange"}`)
        ?.appendChild(el);

      playerBoost[player.id] = tweened(player.boost, { duration: 200 });
      playerBoost[player.id].subscribe((value) => {
        document.querySelector(
          `.team-players#${
            player.team === 0 ? "blue" : "orange"
          } .player#player-${i} #boost-track #boost-fill`
        ).style.width = `${Math.floor(value)}%`;

        document.querySelector(
          `.team-players#${
            player.team === 0 ? "blue" : "orange"
          } .player#player-${i} #boost-value`
        ).innerHTML = `${Math.floor(value)}`;
      });
    });

  Object.values(players).forEach((player) => {
    playerBoost[player.id].set(player.boost);
  });
};
