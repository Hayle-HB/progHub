import { useState, useEffect, useRef } from "react";
import {
  playCardFlip,
  playMatchSuccess,
  playMatchFail,
  playGameStart,
  playGameWin,
  playGameLose,
} from "../RoadMap/sounds";
import {
  FaCode,
  FaDatabase,
  FaBrain,
  FaMobile,
  FaServer,
  FaShieldAlt,
  FaReact,
  FaCloud,
  FaBug,
  FaRobot,
  FaUsersCog,
  FaNetworkWired,
} from "react-icons/fa";
import { MenuScreen, GameScreen, GameOverScreen } from "./MemoryGameUI";

export const DIFFICULTY_LEVELS = {
  EASY: { pairs: 6, timeLimit: 60, hints: 3 },
  MEDIUM: { pairs: 8, timeLimit: 45, hints: 2 },
  HARD: { pairs: 12.5, timeLimit: 30, hints: 1 },
};

export const GAME_ICONS = [
  { icon: FaCode, name: "Developer" },
  { icon: FaDatabase, name: "Database" },
  { icon: FaBrain, name: "AI" },
  { icon: FaMobile, name: "Mobile" },
  { icon: FaServer, name: "Server" },
  { icon: FaShieldAlt, name: "Security" },
  { icon: FaReact, name: "React" },
  { icon: FaCloud, name: "Cloud" },
  { icon: FaBug, name: "Debug" },
  { icon: FaRobot, name: "Robot" },
  { icon: FaUsersCog, name: "Team" },
  { icon: FaNetworkWired, name: "Network" },
  { icon: FaCode, name: "Code" },
];

export const useMemoryGame = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [gameStatus, setGameStatus] = useState("menu");
  const [hintsRemaining, setHintsRemaining] = useState(0);
  const [hintCards, setHintCards] = useState([]);
  const [comboStreak, setComboStreak] = useState(0);
  const [moves, setMoves] = useState(0);
  const [lastMatchTime, setLastMatchTime] = useState(0);
  const [difficultyScores, setDifficultyScores] = useState({});

  // Use ref to prevent duplicate win handling
  const gameEndProcessed = useRef(false);

  // Clear all timeouts when game ends
  const timeoutRefs = useRef([]);

  const clearAllTimeouts = () => {
    timeoutRefs.current.forEach((id) => clearTimeout(id));
    timeoutRefs.current = [];
  };

  const addTimeout = (callback, delay) => {
    const id = setTimeout(() => {
      callback();
      timeoutRefs.current = timeoutRefs.current.filter((t) => t !== id);
    }, delay);
    timeoutRefs.current.push(id);
    return id;
  };

  // Load saved high scores from localStorage on initial load
  useEffect(() => {
    const savedScores = localStorage.getItem("memoryGameScores");
    if (savedScores) {
      try {
        setDifficultyScores(JSON.parse(savedScores));
      } catch (e) {
        console.error("Error loading saved scores:", e);
        localStorage.removeItem("memoryGameScores");
      }
    }
  }, []);

  // Save high scores to localStorage when they change
  useEffect(() => {
    if (Object.keys(difficultyScores).length > 0) {
      localStorage.setItem(
        "memoryGameScores",
        JSON.stringify(difficultyScores)
      );
    }
  }, [difficultyScores]);

  const playSound = (soundFn) => {
    if (!isMuted) {
      soundFn();
    }
  };

  const initializeGame = (level) => {
    // Clear any remaining timeouts
    clearAllTimeouts();

    // Reset game end processed flag
    gameEndProcessed.current = false;

    const { pairs, hints } = DIFFICULTY_LEVELS[level];

    // Special handling for HARD level with 25 cards (12 pairs + 1 single card)
    if (level === "HARD") {
      const fullPairs = Math.floor(pairs);
      const selectedIcons = GAME_ICONS.slice(0, fullPairs + 1);

      // Create pairs for all icons except the last one
      let cardPairs = [];
      for (let i = 0; i < fullPairs; i++) {
        cardPairs.push(selectedIcons[i], selectedIcons[i]);
      }

      // Add the single card for the last icon
      cardPairs.push(selectedIcons[fullPairs]);

      // Shuffle and map
      cardPairs = cardPairs
        .sort(() => Math.random() - 0.5)
        .map((item, index) => ({
          ...item,
          id: index,
          isFlipped: false,
          isMatched: false,
        }));

      setCards(cardPairs);
    } else {
      // Normal handling for other difficulties
      const selectedIcons = GAME_ICONS.slice(0, pairs);
      const cardPairs = [...selectedIcons, ...selectedIcons]
        .sort(() => Math.random() - 0.5)
        .map((item, index) => ({
          ...item,
          id: index,
          isFlipped: false,
          isMatched: false,
        }));

      setCards(cardPairs);
    }

    setFlipped([]);
    setMatched([]);
    setScore(0);
    setComboStreak(0);
    setMoves(0);
    setTimeLeft(DIFFICULTY_LEVELS[level].timeLimit);
    setDifficulty(level);
    setGameStatus("playing");
    setHintsRemaining(hints);
    setHintCards([]);
    setLastMatchTime(Date.now());
    playSound(playGameStart);
  };

  // Timer effect for countdown
  useEffect(() => {
    let timer;
    if (gameStatus === "playing" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (!gameEndProcessed.current) {
              gameEndProcessed.current = true;
              setGameStatus("lost");
              playSound(playGameLose);
              clearAllTimeouts();
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [gameStatus, timeLeft]);

  // Clean up on unmount or status change
  useEffect(() => {
    if (gameStatus !== "playing") {
      clearAllTimeouts();
    }

    return () => {
      clearAllTimeouts();
    };
  }, [gameStatus]);

  // Check win condition
  useEffect(() => {
    if (
      matched.length &&
      matched.length === cards.length &&
      gameStatus === "playing"
    ) {
      // Prevent duplicate processing
      if (gameEndProcessed.current) return;
      gameEndProcessed.current = true;

      // Clear all pending timeouts
      clearAllTimeouts();

      // Update game status
      setGameStatus("won");
      playSound(playGameWin);

      // Calculate final score based on difficulty, time left, and moves
      const timeBonus = timeLeft * 10;
      const difficultyMultiplier =
        difficulty === "EASY" ? 1 : difficulty === "MEDIUM" ? 1.5 : 2;

      const finalScore = Math.round((score + timeBonus) * difficultyMultiplier);

      // Update high score for this difficulty if better
      setDifficultyScores((prev) => {
        const currentBest = prev[difficulty] || 0;
        if (finalScore > currentBest) {
          return { ...prev, [difficulty]: finalScore };
        }
        return prev;
      });

      setScore(finalScore);
    }
  }, [matched, cards, score, timeLeft, difficulty, gameStatus]);

  const handleCardClick = (cardId) => {
    // Prevent clicks in these conditions
    if (
      flipped.length === 2 ||
      flipped.includes(cardId) ||
      matched.includes(cardId) ||
      gameStatus !== "playing" ||
      gameEndProcessed.current
    ) {
      return;
    }

    // Clear hint highlights when a card is clicked
    if (hintCards.length > 0) {
      setHintCards([]);
    }

    playSound(playCardFlip);
    const newFlipped = [...flipped, cardId];
    setFlipped(newFlipped);

    // Handle scoring and matching logic when two cards are flipped
    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);

      // Get the two flipped cards
      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find((c) => c.id === firstId);
      const secondCard = cards.find((c) => c.id === secondId);

      // Check for special single card in HARD mode
      const singleCardIndex = difficulty === "HARD" ? 24 : -1;

      if (
        difficulty === "HARD" &&
        (firstId === singleCardIndex || secondId === singleCardIndex)
      ) {
        // Special handling for the single card in HARD mode
        playSound(playMatchSuccess);
        addTimeout(() => {
          setMatched((prev) => [...prev, singleCardIndex]);
          setFlipped([]);
          setScore((prev) => prev + 150); // Bonus for finding the special card
          setComboStreak(1); // Reset combo streak
        }, 500);
      }
      // Regular card matching logic
      else if (firstCard.name === secondCard.name) {
        // Cards match
        playSound(playMatchSuccess);

        // Calculate time since last match for combo system
        const now = Date.now();
        const timeSinceLastMatch = now - lastMatchTime;

        addTimeout(() => {
          setMatched((prev) => [...prev, firstId, secondId]);
          setFlipped([]);

          // Combo system - faster matches = higher combo
          let newCombo = 1;
          let matchPoints = 100;

          if (timeSinceLastMatch < 3000) {
            // Fast match - increase combo
            newCombo = comboStreak + 1;
            matchPoints = 100 * newCombo;
          } else {
            // Slow match - reset combo
            newCombo = 1;
          }

          setComboStreak(newCombo);
          setScore((prev) => prev + matchPoints);
          setLastMatchTime(now);
        }, 500);
      } else {
        // Cards don't match
        addTimeout(() => {
          setFlipped([]);
          setScore((prev) => Math.max(0, prev - 20)); // Small penalty
          setComboStreak(0); // Reset combo streak
          playSound(playMatchFail);
        }, 1000);
      }
    }
  };

  const useHint = () => {
    if (
      hintsRemaining <= 0 ||
      gameStatus !== "playing" ||
      gameEndProcessed.current
    )
      return;

    // Find unmatched cards
    const unmatchedCardIds = cards
      .filter((card) => !matched.includes(card.id))
      .map((card) => card.id);

    if (unmatchedCardIds.length <= 0) return;

    // Find a pair of matching cards
    const cardMap = new Map();
    let pairFound = false;
    let pairIds = [];

    // Create map of card names to their IDs
    cards.forEach((card) => {
      if (!matched.includes(card.id) && !flipped.includes(card.id)) {
        if (cardMap.has(card.name)) {
          pairIds = [cardMap.get(card.name), card.id];
          pairFound = true;
        } else {
          cardMap.set(card.name, card.id);
        }
      }
    });

    if (pairFound) {
      setHintCards(pairIds);
      setHintsRemaining((prev) => prev - 1);
      // Small penalty for using a hint
      setScore((prev) => Math.max(0, prev - 50));
    }
  };

  return {
    gameState: {
      isMuted,
      difficulty,
      cards,
      flipped,
      matched,
      score,
      timeLeft,
      gameStatus,
      comboStreak,
      moves,
      difficultyScores,
      hintsRemaining,
      hintCards,
    },
    actions: {
      setIsMuted,
      initializeGame,
      handleCardClick,
      setGameStatus,
      useHint,
    },
  };
};

// Main component that uses the hook and UI components
const MemoryGame = () => {
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
    comboStreak,
    moves,
    difficultyScores,
    hintsRemaining,
    hintCards,
  } = gameState;

  const {
    setIsMuted,
    initializeGame,
    handleCardClick,
    setGameStatus,
    useHint,
  } = actions;

  const toggleMute = () => setIsMuted(!isMuted);
  const handlePlayAgain = () => setGameStatus("menu");
  const handleBackToMenu = () => setGameStatus("menu");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] py-6">
      {gameStatus === "menu" && (
        <MenuScreen
          onStart={initializeGame}
          isMuted={isMuted}
          onToggleMute={toggleMute}
          difficultyScores={difficultyScores}
        />
      )}

      {gameStatus === "playing" && (
        <GameScreen
          cards={cards}
          flipped={flipped}
          matched={matched}
          score={score}
          timeLeft={timeLeft}
          difficulty={difficulty}
          onCardClick={handleCardClick}
          onBack={handleBackToMenu}
          isMuted={isMuted}
          onToggleMute={toggleMute}
          comboStreak={comboStreak}
          moves={moves}
          hintsRemaining={hintsRemaining}
          onUseHint={useHint}
          hintCards={hintCards}
        />
      )}

      {(gameStatus === "won" || gameStatus === "lost") && (
        <GameOverScreen
          gameStatus={gameStatus}
          score={score}
          onPlayAgain={handlePlayAgain}
          difficulty={difficulty}
          moves={moves}
          timeLeft={timeLeft}
          difficultyScores={difficultyScores}
        />
      )}
    </div>
  );
};

export default MemoryGame;
