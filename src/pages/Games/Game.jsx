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
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto flex-grow flex items-center justify-center">
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

      {/* Simple How to Play Description */}
      <div className="w-full max-w-2xl mx-auto text-center text-sm text-[#94A3B8] mt-4 px-4">
        <p className="max-w-md mx-auto">
          How to Play: Click cards to flip them, match pairs of identical cards,
          and complete all matches before time runs out. 
        </p>
      </div>
    </div>
  );
};

export default Game;
