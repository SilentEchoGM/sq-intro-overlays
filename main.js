import "./style.css";

import { sosSocket } from "./socket";

import { setTargetPlayerBoost } from "./boost";
import { setClock } from "./clock";
import { getTeamNames, setTeamNames, setTeamScores } from "./teams";
import { updateTeamPlayerHtml } from "./team-players";

console.log("Starting...");

sosSocket.onmessage = (event) => {
  const parsed = JSON.parse(event.data);

  if (parsed.event === "game:update_state") {
    if (parsed.data.game.hasTarget) {
      const targetPlayer = parsed.data.players[parsed.data.game.target];
      setTargetPlayerBoost(targetPlayer.boost);
    }

    getTeamNames().then(setTeamNames);

    setTeamScores({
      blue: parsed.data.game.teams[0].score,
      orange: parsed.data.game.teams[1].score,
    });

    setClock(parsed.data.game.time_seconds, parsed.data.game.isOT);

    updateTeamPlayerHtml(parsed.data.players);
  }
};
