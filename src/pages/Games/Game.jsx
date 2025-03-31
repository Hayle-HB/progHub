import React from "react";
import { useMemoryGame } from "./MemoryGame";
import { MenuScreen, GameScreen, GameOverScreen } from "./MemoryGameUI";

const Game = () => {
  const { gameState, actions } = useMemoryGame();
  const {
    isMuted,
    difficulty,
    cards,
    flipped,
    matched,
    score,
    timeLeft,
    gameStatus,
  } = gameState;

  return (
    <div className="w-full h-full flex items-center justify-center py-1">
      {gameStatus === "menu" && (
        <MenuScreen
          onStart={actions.initializeGame}
          isMuted={isMuted}
          onToggleMute={() => actions.setIsMuted(!isMuted)}
        />
      )}
      {gameStatus === "playing" && (
        <GameScreen
          score={score}
          timeLeft={timeLeft}
          isMuted={isMuted}
          onToggleMute={() => actions.setIsMuted(!isMuted)}
          difficulty={difficulty}
          cards={cards}
          flipped={flipped}
          matched={matched}
          onCardClick={actions.handleCardClick}
        />
      )}
      {(gameStatus === "won" || gameStatus === "lost") && (
        <GameOverScreen
          gameStatus={gameStatus}
          score={score}
          onPlayAgain={() => actions.setGameStatus("menu")}
        />
      )}
    </div>
  );
};

export default Game;
