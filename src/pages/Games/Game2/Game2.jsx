import React, { useState, useEffect, useRef } from "react";

const GRID_SIZE = 8;
const CELL_SIZE = 60;
const PARTICLE_SIZE = 40;
const ANIMATION_SPEED = 200;

const Game2 = () => {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  const [moves, setMoves] = useState(0);
  const [particles, setParticles] = useState([]);
  const [walls, setWalls] = useState([]);
  const [goals, setGoals] = useState([]);
  const [quantumState, setQuantumState] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);

  // Quantum effects
  const QUANTUM_EFFECTS = {
    superposition: {
      name: "Superposition",
      description: "Split into multiple states",
      color: "#FF00FF",
      maxStates: 3,
    },
    entanglement: {
      name: "Entanglement",
      description: "Link states together",
      color: "#00FFFF",
      maxLinks: 2,
    },
    tunneling: {
      name: "Tunneling",
      description: "Pass through thin walls",
      color: "#FFFF00",
      duration: 3,
    },
  };

  // Initialize level
  const initializeLevel = (levelNum) => {
    // Generate maze based on level
    const newWalls = [];
    const newGoals = [];
    const startPositions = [];

    // Create outer walls
    for (let i = 0; i < GRID_SIZE; i++) {
      newWalls.push({ x: 0, y: i });
      newWalls.push({ x: GRID_SIZE - 1, y: i });
      newWalls.push({ x: i, y: 0 });
      newWalls.push({ x: i, y: GRID_SIZE - 1 });
    }

    // Add level-specific walls
    switch (levelNum) {
      case 1:
        // Simple maze
        newWalls.push({ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 });
        newGoals.push({ x: 6, y: 6, color: "#00FF00" });
        startPositions.push({ x: 1, y: 1, state: 1 });
        break;
      case 2:
        // Requires superposition
        newWalls.push({ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 });
        newWalls.push({ x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 });
        newGoals.push({ x: 6, y: 6, color: "#00FF00" });
        startPositions.push({ x: 1, y: 1, state: 1 });
        break;
      case 3:
        // Requires entanglement
        newWalls.push({ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 });
        newWalls.push({ x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 });
        newGoals.push(
          { x: 6, y: 6, color: "#00FF00" },
          { x: 6, y: 1, color: "#0000FF" }
        );
        startPositions.push({ x: 1, y: 1, state: 1 }, { x: 1, y: 6, state: 2 });
        break;
      // Add more levels...
    }

    setWalls(newWalls);
    setGoals(newGoals);
    setParticles(
      startPositions.map((pos) => ({
        ...pos,
        effect: null,
        linkedTo: null,
        isTunneling: false,
      }))
    );
  };

  // Check if position is valid
  const isValidPosition = (x, y) => {
    if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) return false;
    return !walls.some((wall) => wall.x === x && wall.y === y);
  };

  // Move particle
  const moveParticle = (particleIndex, dx, dy) => {
    if (isAnimating) return;

    const particle = particles[particleIndex];
    const newX = particle.x + dx;
    const newY = particle.y + dy;

    if (isValidPosition(newX, newY)) {
      setIsAnimating(true);
      setParticles((prev) => {
        const newParticles = [...prev];
        newParticles[particleIndex] = {
          ...newParticles[particleIndex],
          x: newX,
          y: newY,
        };
        return newParticles;
      });

      // Check for goal
      const goal = goals.find((g) => g.x === newX && g.y === newY);
      if (goal) {
        setTimeout(() => {
          setGoals((prev) => prev.filter((g) => g.x !== newX || g.y !== newY));
          if (goals.length === 1) {
            // Level complete
            setLevel((prev) => prev + 1);
            initializeLevel(level + 1);
          }
        }, ANIMATION_SPEED);
      }

      setTimeout(() => setIsAnimating(false), ANIMATION_SPEED);
      setMoves((prev) => prev + 1);
    }
  };

  // Apply quantum effect
  const applyEffect = (effectType, particleIndex) => {
    if (isAnimating) return;

    const particle = particles[particleIndex];
    const effect = QUANTUM_EFFECTS[effectType];

    setParticles((prev) => {
      const newParticles = [...prev];
      switch (effectType) {
        case "superposition":
          if (newParticles.length < effect.maxStates) {
            newParticles.push({
              ...particle,
              state: newParticles.length + 1,
            });
          }
          break;
        case "entanglement":
          if (!particle.linkedTo) {
            const otherParticle = newParticles.find(
              (p) => p !== particle && !p.linkedTo && p.state !== particle.state
            );
            if (otherParticle) {
              particle.linkedTo = otherParticle.state;
              otherParticle.linkedTo = particle.state;
            }
          }
          break;
        case "tunneling":
          particle.isTunneling = true;
          setTimeout(() => {
            setParticles((prev) =>
              prev.map((p) =>
                p === particle ? { ...p, isTunneling: false } : p
              )
            );
          }, effect.duration * 1000);
          break;
      }
      return newParticles;
    });
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted || gameOver || isAnimating) return;

      const activeParticles = particles.filter((p) => p.state === quantumState);
      activeParticles.forEach((particle, index) => {
        switch (e.key) {
          case "ArrowUp":
            moveParticle(index, 0, -1);
            break;
          case "ArrowDown":
            moveParticle(index, 0, 1);
            break;
          case "ArrowLeft":
            moveParticle(index, -1, 0);
            break;
          case "ArrowRight":
            moveParticle(index, 1, 0);
            break;
          case "1":
            setQuantumState(1);
            break;
          case "2":
            setQuantumState(2);
            break;
          case "3":
            setQuantumState(3);
            break;
          case "s":
            applyEffect("superposition", index);
            break;
          case "e":
            applyEffect("entanglement", index);
            break;
          case "t":
            applyEffect("tunneling", index);
            break;
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameStarted, gameOver, particles, quantumState, isAnimating]);

  // Draw game
  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 1;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, GRID_SIZE * CELL_SIZE);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(GRID_SIZE * CELL_SIZE, i * CELL_SIZE);
      ctx.stroke();
    }

    // Draw walls
    ctx.fillStyle = "#666";
    walls.forEach((wall) => {
      ctx.fillRect(
        wall.x * CELL_SIZE,
        wall.y * CELL_SIZE,
        CELL_SIZE,
        CELL_SIZE
      );
    });

    // Draw goals
    goals.forEach((goal) => {
      ctx.fillStyle = goal.color;
      ctx.beginPath();
      ctx.arc(
        (goal.x + 0.5) * CELL_SIZE,
        (goal.y + 0.5) * CELL_SIZE,
        CELL_SIZE / 3,
        0,
        Math.PI * 2
      );
      ctx.fill();
    });

    // Draw particles
    particles.forEach((particle) => {
      const alpha = particle.state === quantumState ? 1 : 0.3;
      ctx.globalAlpha = alpha;

      // Draw particle
      ctx.fillStyle = particle.isTunneling
        ? "#FFFF00"
        : particle.linkedTo
        ? "#00FFFF"
        : particle.state === 1
        ? "#FF0000"
        : particle.state === 2
        ? "#00FF00"
        : "#0000FF";

      ctx.beginPath();
      ctx.arc(
        (particle.x + 0.5) * CELL_SIZE,
        (particle.y + 0.5) * CELL_SIZE,
        PARTICLE_SIZE / 2,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Draw state number
      ctx.fillStyle = "#FFF";
      ctx.font = "20px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        particle.state.toString(),
        (particle.x + 0.5) * CELL_SIZE,
        (particle.y + 0.5) * CELL_SIZE
      );

      // Draw entanglement link
      if (particle.linkedTo) {
        const linkedParticle = particles.find(
          (p) => p.state === particle.linkedTo
        );
        if (linkedParticle) {
          ctx.strokeStyle = "#00FFFF";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(
            (particle.x + 0.5) * CELL_SIZE,
            (particle.y + 0.5) * CELL_SIZE
          );
          ctx.lineTo(
            (linkedParticle.x + 0.5) * CELL_SIZE,
            (linkedParticle.y + 0.5) * CELL_SIZE
          );
          ctx.stroke();
        }
      }
    });
    ctx.globalAlpha = 1;
  }, [gameStarted, walls, goals, particles, quantumState]);

  // Start game
  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setLevel(1);
    setMoves(0);
    setQuantumState(1);
    initializeLevel(1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Quantum Maze</h1>
        <div className="grid grid-cols-2 gap-4 text-xl">
          <div>Level: {level}</div>
          <div>Moves: {moves}</div>
        </div>
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={GRID_SIZE * CELL_SIZE}
          height={GRID_SIZE * CELL_SIZE}
          className="bg-gray-800 border-2 border-gray-700 rounded-lg"
        />

        {!gameStarted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Quantum Maze</h2>
              <p className="mb-4">Control quantum particles through a maze!</p>
              <button
                onClick={startGame}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Start Game
              </button>
            </div>
          </div>
        )}

        {showTutorial && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-lg">
            <div className="text-center max-w-md">
              <h2 className="text-2xl font-bold mb-4">How to Play</h2>
              <div className="text-left mb-4">
                <p className="mb-2">• Use arrow keys to move particles</p>
                <p className="mb-2">
                  • Press 1-3 to switch between quantum states
                </p>
                <p className="mb-2">
                  • S: Create superposition (split particle)
                </p>
                <p className="mb-2">
                  • E: Create entanglement (link particles)
                </p>
                <p className="mb-2">• T: Activate quantum tunneling</p>
                <p className="mb-2">• Guide all particles to their goals</p>
              </div>
              <button
                onClick={() => setShowTutorial(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Start Playing
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold mb-2">Quantum Effects</h3>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(QUANTUM_EFFECTS).map(([key, effect]) => (
            <div key={key} className="p-4 bg-gray-800 rounded-lg">
              <div className="font-bold" style={{ color: effect.color }}>
                {effect.name}
              </div>
              <div className="text-sm">{effect.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game2;
