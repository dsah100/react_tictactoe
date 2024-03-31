import { useEffect, useState } from "react";

export const TicTacToe = () => {
  const [player, setPlayer] = useState("X");
  const [game, setGame] = useState({
    on: "",
    tw: "",
    th: "",
    fo: "",
    fi: "",
    si: "",
    se: "",
    ei: "",
    ni: "",
  });
  const [didWin, setDidWin] = useState(false);

  function changeTextVICTORY(id) {
    const h1Element = document.getElementById(id);
    if (h1Element) {
      h1Element.innerText = "VICTORY";
    }
  }
  function clear() {
    setGame({
      on: "",
      tw: "",
      th: "",
      fo: "",
      fi: "",
      si: "",
      se: "",
      ei: "",
      ni: "",
    });
  }

  const handleBoxClick = (event) => {
    const id = event.target.id;

    const updateGame = {
      on: game.on,
      tw: game.tw,
      th: game.th,
      fo: game.fo,
      fi: game.fi,
      si: game.si,
      se: game.se,
      ei: game.ei,
      ni: game.ni,
    };

    updateGame[id] = player;

    setGame(updateGame);

    console.log();

    if (
      updateGame.on &&
      updateGame.on === updateGame.tw &&
      updateGame.on === updateGame.th
    ) {
      console.log("Win");
      changeTextVICTORY("statusforvictory");
      setDidWin(true);
    }
    if (
      updateGame.tw &&
      updateGame.tw === updateGame.fi &&
      updateGame.tw === updateGame.ei
    ) {
      console.log("Win");
      setDidWin(true);
    }
    if (
      updateGame.th &&
      updateGame.th === updateGame.si &&
      updateGame.th === updateGame.ni
    ) {
      console.log("Win");
      setDidWin(true);
    }
    if (
      updateGame.on &&
      updateGame.on === updateGame.fo &&
      updateGame.on === updateGame.se
    ) {
      console.log("Win");
      setDidWin(true);
    }

    // change the player
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  };

  useEffect(() => {
    console.log("useEffect run");

    if (didWin) {
      clear();
    }
  }, [didWin]);

  return (
    <div className="ttt">
      <h1 id="statusforvictory">TICTACTOE</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2
          id="on"
          onClick={(event) => handleBoxClick(event)}
          style={{ border: "4px solid #000000", height: "50px", width: "50px" }}
        >
          {game.on}
        </h2>
        <h2
          id="tw"
          onClick={(event) => handleBoxClick(event)}
          style={{ border: "4px solid #000000", height: "50px", width: "50px" }}
        >
          {game.tw}
        </h2>
        <h2
          id="th"
          onClick={(event) => handleBoxClick(event)}
          style={{ border: "4px solid #000000", height: "50px", width: "50px" }}
        >
          {game.th}
        </h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2
          id="fo"
          onClick={(event) => handleBoxClick(event)}
          style={{ border: "4px solid #000000", height: "50px", width: "50px" }}
        >
          {game.fo}
        </h2>
        <h2
          id="fi"
          onClick={(event) => handleBoxClick(event)}
          style={{ border: "4px solid #000000", height: "50px", width: "50px" }}
        >
          {game.fi}
        </h2>
        <h2
          id="si"
          onClick={(event) => handleBoxClick(event)}
          style={{ border: "4px solid #000000", height: "50px", width: "50px" }}
        >
          {game.si}
        </h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2
          id="se"
          onClick={(event) => handleBoxClick(event)}
          style={{ border: "4px solid #000000", height: "50px", width: "50px" }}
        >
          {game.se}
        </h2>
        <h2
          id="ei"
          onClick={(event) => handleBoxClick(event)}
          style={{ border: "4px solid #000000", height: "50px", width: "50px" }}
        >
          {game.ei}
        </h2>
        <h2
          id="ni"
          onClick={(event) => handleBoxClick(event)}
          style={{ border: "4px solid #000000", height: "50px", width: "50px" }}
        >
          {game.ni}
        </h2>
      </div>
      <button onClick={() => clear()}>RESTART</button>
    </div>
  );
};
