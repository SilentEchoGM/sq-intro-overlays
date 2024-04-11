import "./style.css";

import { sosSocket } from "./socket";

import { setTargetPlayerBoost, targetPlayer } from "./boost";

console.log("Starting...");

sosSocket.onmessage = (event) => {
  console.log(event.data);
};

sosSocket.onmessage = (event) => {
  console.log(event.data);

  const parsed = JSON.parse(event.data);

  if (parsed.event === "game:update_state") {
    if (parsed.data.game.hasTarget) {
      const targetPlayer = parsed.data.players[parsed.data.game.target];
      setTargetPlayerBoost(targetPlayer.boost);
    }
  }
};
