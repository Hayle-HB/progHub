import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaVolumeMute,
  FaVolumeUp,
  FaTrophy,
  FaClock,
  FaStar,
} from "react-icons/fa";
import { DIFFICULTY_LEVELS } from "./MemoryGame";

export const MenuScreen = ({
  onStart,
  isMuted,
  onToggleMute,
  difficultyScores = {},
}) => (
  <div className="w-full max-w-sm mx-auto px-4">
    <div className="relative p-5 rounded-lg bg-[#111827]/90 border border-[#3B82F6]/30 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-[#60A5FA]">Memory Game</h3>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onToggleMute}
          className="p-2 rounded-full bg-[#0F172A] text-[#60A5FA] border border-[#2563EB]/20"
        >
          {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
        </motion.button>
      </div>
      <div className="grid gap-3">
        {Object.entries(DIFFICULTY_LEVELS).map(
          ([level, { pairs, timeLimit }]) => (
            <motion.button
              key={level}
              whileTap={{ scale: 0.98 }}
              className="relative bg-[#0F172A] hover:bg-[#1E293B] rounded-lg p-3 border border-[#3B82F6]/20"
              onClick={() => onStart(level)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[#60A5FA] font-bold text-lg">{level}</h4>
                  <div className="flex items-center gap-3 mt-1 text-[#94A3B8] text-sm">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-amber-400" size={12} />
                      {pairs} Pairs
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-violet-400" size={12} />
                      {timeLimit}s
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center">
                  <span className="text-[#60A5FA] text-lg font-bold">
                    {pairs * 2}
                  </span>
                </div>
                {difficultyScores[level] > 0 && (
                  <div className="text-xs mt-1 text-amber-400">
                    Best: {difficultyScores[level]}
                  </div>
                )}
              </div>
            </motion.button>
          )
        )}
      </div>
    </div>
  </div>
);

// game screen

export const GameOverScreen = ({
  gameStatus,
  score,
  onPlayAgain,
  difficulty,
  moves = 0,
  timeLeft = 0,
  difficultyScores = {},
}) => (
  <div className="w-full max-w-sm mx-auto px-4">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative p-5 rounded-lg bg-[#111827]/90 border border-[#3B82F6]/30 shadow-lg text-center"
    >
      <h3 className="text-xl font-bold text-[#60A5FA] mb-2">
        {gameStatus === "won" ? "Congratulations! 🎉" : "Game Over"}
      </h3>

      {gameStatus === "won" ? (
        <div className="mb-4">
          <div className="text-2xl font-bold text-white mb-1">{score} pts</div>
          <p className="text-[#94A3B8] text-sm mb-3">
            {score > (difficultyScores[difficulty] || 0)
              ? "New High Score! 🏆"
              : "Great job!"}
          </p>

          <div className="grid grid-cols-3 gap-2 mt-3 mb-4">
            <div className="bg-[#0F172A] p-2 rounded-md">
              <div className="text-amber-400 text-sm font-medium">Moves</div>
              <div className="text-white">{moves}</div>
            </div>
            <div className="bg-[#0F172A] p-2 rounded-md">
              <div className="text-violet-400 text-sm font-medium">
                Time Left
              </div>
              <div className="text-white">{timeLeft}s</div>
            </div>
            <div className="bg-[#0F172A] p-2 rounded-md">
              <div className="text-emerald-400 text-sm font-medium">Best</div>
              <div className="text-white">
                {difficultyScores[difficulty] || score}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-[#94A3B8] mb-5">Don't give up! Try again!</p>
      )}

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onPlayAgain}
        className="w-full py-2 px-4 rounded-md bg-[#3B82F6] text-white font-bold hover:bg-[#2563EB] transition-colors"
      >
        Play Again
      </motion.button>
    </motion.div>
  </div>
);

export const GameScreen = ({
  cards,
  flipped,
  matched,
  score,
  timeLeft,
  difficulty,
  onCardClick,
  onBack,
  isMuted,
  onToggleMute,
  comboStreak = 0,
  moves = 0,
  hintsRemaining,
  onUseHint,
  hintCards = [],
}) => (
  <div
    className={`w-full mx-auto px-3 ${
      difficulty === "EASY"
        ? "max-w-sm"
        : difficulty === "MEDIUM"
        ? "max-w-md"
        : "max-w-lg"
    }`}
  >
    <div
      className={`relative rounded-lg bg-[#111827]/90 border border-[#3B82F6]/30 shadow-lg ${
        difficulty === "HARD" ? "p-3" : "p-5"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <h3
            className={`font-bold text-[#60A5FA] ${
              difficulty === "HARD" ? "text-lg" : "text-xl"
            }`}
          >
            Memory Game
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-[#0F172A] px-2 py-1 rounded-md border border-[#2563EB]/20">
              <FaTrophy className="text-amber-400" size={12} />
              <span className="text-white text-sm font-medium">{score}</span>
            </div>
            <div className="flex items-center gap-1 bg-[#0F172A] px-2 py-1 rounded-md border border-[#2563EB]/20">
              <FaClock className="text-violet-400" size={12} />
              <span className="text-white text-sm font-medium">
                {timeLeft}s
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {comboStreak > 1 && (
            <div className="px-2 py-1 rounded-md text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-pulse">
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {comboStreak}x Combo!
              </motion.span>
            </div>
          )}
          <div className="text-xs text-gray-400">Moves: {moves}</div>
          {hintsRemaining > 0 && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onUseHint}
              className="px-2 py-1 rounded-md text-xs bg-[#0F172A] text-yellow-400 border border-yellow-500/30"
              title="Get a hint"
            >
              Hint: {hintsRemaining}
            </motion.button>
          )}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onToggleMute}
            className="p-2 rounded-full bg-[#0F172A] text-[#60A5FA] border border-[#2563EB]/20"
          >
            {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="px-3 py-1 rounded-md text-sm bg-[#0F172A] text-[#60A5FA] border border-[#2563EB]/20"
          >
            Back
          </motion.button>
        </div>
      </div>

      <div
        className={`grid ${
          difficulty === "EASY"
            ? "grid-cols-3 gap-3"
            : difficulty === "MEDIUM"
            ? "grid-cols-4 gap-2.5"
            : "grid-cols-5 gap-2"
        }`}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: difficulty === "HARD" ? 1.01 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCardClick(card.id)}
            className={`aspect-square rounded-lg cursor-pointer shadow-md ${
              difficulty === "HARD"
                ? "h-[60px]"
                : difficulty === "MEDIUM"
                ? "h-[80px]"
                : "h-[95px]"
            } ${
              flipped.includes(card.id) || matched.includes(card.id)
                ? "bg-[#1E3A8A]/30"
                : "bg-[#0F172A]"
            } ${
              matched.includes(card.id)
                ? difficulty === "HARD"
                  ? "border border-[#60A5FA]"
                  : "border-2 border-[#60A5FA]"
                : hintCards.includes(card.id)
                ? "border-2 border-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]"
                : "border border-[#1E293B]"
            }`}
          >
            <AnimatePresence>
              {(flipped.includes(card.id) || matched.includes(card.id)) && (
                <motion.div
                  initial={{ rotateY: 90 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: 90 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <card.icon
                    size={
                      difficulty === "HARD"
                        ? 22
                        : difficulty === "MEDIUM"
                        ? 30
                        : 36
                    }
                    className={
                      matched.includes(card.id)
                        ? "text-[#60A5FA]"
                        : "text-[#A1A1AA]"
                    }
                  />

                  {/* Special indicator for the single card in HARD mode */}
                  {difficulty === "HARD" && card.id === 24 && (
                    <div className="absolute top-0 right-0 w-2 h-2 bg-amber-400 rounded-full"></div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
