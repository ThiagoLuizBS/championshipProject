import React, { useState } from "react";

export function Tweet() {
  const [psg, setPsg] = useState(true);

  const setFalse = () => {
    if (psg) setPsg(false);
    else setPsg(true);
  };

  return (
    <div>
      <div onMouseOver={setFalse} onMouseLeave={setFalse} className="mbappe" />
      {psg ? <p>PSG CAMPEÃO</p> : <p>É MENTIRAAAAA</p>}
    </div>
  );
}
