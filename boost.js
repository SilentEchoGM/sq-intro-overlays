export const targetPlayer = {
  boost: 34,
};

export const setTargetPlayerBoostStroke = (boost) => {
  const track = document.querySelector("#target-boost-track-fill");

  const circumference = track.r.baseVal.value * 2 * Math.PI;

  track.style.strokeDasharray = `${circumference * 0.75} ${circumference}`;
  track.style.strokeDashoffset = ((100 - boost) / 100) * circumference * 0.75;
};

export const setTargetPlayerBoost = (boost) => {
  targetPlayer.boost = boost;

  setTargetPlayerBoostStroke(targetPlayer.boost);
  document.querySelector("#target-boost-value").innerHTML = `${boost}`;
};
