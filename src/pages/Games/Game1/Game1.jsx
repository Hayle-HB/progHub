import React, { useState, useEffect, useRef } from "react";
import "./Game1.css";

const BRICK_ROWS = 5;
const BRICK_COLUMNS = 8;
const BRICK_WIDTH = 75;
const BRICK_HEIGHT = 20;
const BRICK_PADDING = 10;
const BRICK_OFFSET_TOP = 30;
const BRICK_OFFSET_LEFT = 30;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 10;
const BALL_RADIUS = 8;

const Game1 = () => {
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [bricks, setBricks] = useState([]);
  const [paddleX, setPaddleX] = useState(0);
  const [ballX, setBallX] = useState(0);
  const [ballY, setBallY] = useState(0);
  const [ballDX, setBallDX] = useState(2);
  const [ballDY, setBallDY] = useState(-2);
  const [rightPressed, setRightPressed] = useState(false);
  const [leftPressed, setLeftPressed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Initialize bricks
    const initialBricks = [];
    for (let c = 0; c < BRICK_COLUMNS; c++) {
      initialBricks[c] = [];
      for (let r = 0; r < BRICK_ROWS; r++) {
        initialBricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
    setBricks(initialBricks);

    // Set initial positions
    setPaddleX((canvasWidth - PADDLE_WIDTH) / 2);
    setBallX(canvasWidth / 2);
    setBallY(canvasHeight - 30);

    // Event listeners
    const handleKeyDown = (e) => {
      if (e.key === "Right" || e.key === "ArrowRight") {
        setRightPressed(true);
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        setLeftPressed(true);
      } else if (e.key === " ") {
        setGameStarted(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "Right" || e.key === "ArrowRight") {
        setRightPressed(false);
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        setLeftPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(ballX, ballY, BALL_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    };

    const drawPaddle = () => {
      ctx.beginPath();
      ctx.rect(
        paddleX,
        canvasHeight - PADDLE_HEIGHT,
        PADDLE_WIDTH,
        PADDLE_HEIGHT
      );
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    };

    const drawBricks = () => {
      for (let c = 0; c < BRICK_COLUMNS; c++) {
        for (let r = 0; r < BRICK_ROWS; r++) {
          if (bricks[c][r].status === 1) {
            const brickX =
              c * (BRICK_WIDTH + BRICK_PADDING) + BRICK_OFFSET_LEFT;
            const brickY =
              r * (BRICK_HEIGHT + BRICK_PADDING) + BRICK_OFFSET_TOP;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, BRICK_WIDTH, BRICK_HEIGHT);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    };

    const collisionDetection = () => {
      for (let c = 0; c < BRICK_COLUMNS; c++) {
        for (let r = 0; r < BRICK_ROWS; r++) {
          const b = bricks[c][r];
          if (b.status === 1) {
            if (
              ballX > b.x &&
              ballX < b.x + BRICK_WIDTH &&
              ballY > b.y &&
              ballY < b.y + BRICK_HEIGHT
            ) {
              setBallDY(-ballDY);
              const newBricks = [...bricks];
              newBricks[c][r].status = 0;
              setBricks(newBricks);
              setScore((prev) => prev + 10);

              // Check if all bricks are destroyed
              if (
                newBricks.every((column) =>
                  column.every((brick) => brick.status === 0)
                )
              ) {
                setGameOver(true);
              }
            }
          }
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      drawBricks();
      drawBall();
      drawPaddle();
      collisionDetection();

      // Ball collision with walls
      if (
        ballX + ballDX > canvasWidth - BALL_RADIUS ||
        ballX + ballDX < BALL_RADIUS
      ) {
        setBallDX(-ballDX);
      }
      if (ballY + ballDY < BALL_RADIUS) {
        setBallDY(-ballDY);
      } else if (ballY + ballDY > canvasHeight - BALL_RADIUS) {
        if (ballX > paddleX && ballX < paddleX + PADDLE_WIDTH) {
          setBallDY(-ballDY);
        } else {
          setGameOver(true);
        }
      }

      // Paddle movement
      if (rightPressed && paddleX < canvasWidth - PADDLE_WIDTH) {
        setPaddleX((prev) => prev + 7);
      } else if (leftPressed && paddleX > 0) {
        setPaddleX((prev) => prev - 7);
      }

      // Ball movement
      setBallX((prev) => prev + ballDX);
      setBallY((prev) => prev + ballDY);
    };

    const gameLoop = setInterval(draw, 10);
    return () => clearInterval(gameLoop);
  }, [
    gameStarted,
    gameOver,
    ballX,
    ballY,
    ballDX,
    ballDY,
    paddleX,
    bricks,
    rightPressed,
    leftPressed,
  ]);

  const resetGame = () => {
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
    setBallX(canvasRef.current.width / 2);
    setBallY(canvasRef.current.height - 30);
    setPaddleX((canvasRef.current.width - PADDLE_WIDTH) / 2);
    setBallDX(2);
    setBallDY(-2);

    // Reset bricks
    const newBricks = [];
    for (let c = 0; c < BRICK_COLUMNS; c++) {
      newBricks[c] = [];
      for (let r = 0; r < BRICK_ROWS; r++) {
        newBricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
    setBricks(newBricks);
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h2>Breakout Game</h2>
        <div className="score">Score: {score}</div>
      </div>
      <div className="game-board">
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="game-canvas"
        />
        {!gameStarted && !gameOver && (
          <div className="start-screen">
            <h3>Press Space to Start</h3>
            <p>Use Left and Right arrow keys to move the paddle</p>
          </div>
        )}
        {gameOver && (
          <div className="game-over">
            <h3>Game Over!</h3>
            <p>Final Score: {score}</p>
            <button onClick={resetGame}>Play Again</button>
          </div>
        )}
      </div>
      <div className="controls-info">
        <p>Use arrow keys to move the paddle</p>
      </div>
    </div>
  );
};

export default Game1;
