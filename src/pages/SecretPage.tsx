import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Crown, Gamepad2, Zap, RotateCcw, Play, Pause } from 'lucide-react';

const SecretPage = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  // Snake Game Component
  const SnakeGame = () => {
    const [snake, setSnake] = useState([[10, 10]]);
    const [food, setFood] = useState([15, 15]);
    const [direction, setDirection] = useState([0, 1]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const resetGame = () => {
      setSnake([[10, 10]]);
      setFood([15, 15]);
      setDirection([0, 1]);
      setGameOver(false);
      setScore(0);
      setIsPlaying(false);
    };

    const moveSnake = useCallback(() => {
      if (gameOver || !isPlaying) return;

      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        const head = [...newSnake[0]];
        head[0] += direction[0];
        head[1] += direction[1];

        // Check walls
        if (head[0] < 0 || head[0] >= 20 || head[1] < 0 || head[1] >= 20) {
          setGameOver(true);
          setIsPlaying(false);
          return prevSnake;
        }

        // Check self collision
        if (newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
          setGameOver(true);
          setIsPlaying(false);
          return prevSnake;
        }

        newSnake.unshift(head);

        // Check food
        if (head[0] === food[0] && head[1] === food[1]) {
          setScore(s => s + 10);
          setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, [direction, food, gameOver, isPlaying]);

    useEffect(() => {
      const interval = setInterval(moveSnake, 150);
      return () => clearInterval(interval);
    }, [moveSnake]);

    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        switch (e.key) {
          case 'ArrowUp':
            e.preventDefault();
            setDirection([-1, 0]);
            break;
          case 'ArrowDown':
            e.preventDefault();
            setDirection([1, 0]);
            break;
          case 'ArrowLeft':
            e.preventDefault();
            setDirection([0, -1]);
            break;
          case 'ArrowRight':
            e.preventDefault();
            setDirection([0, 1]);
            break;
          case ' ':
            e.preventDefault();
            setIsPlaying(!isPlaying);
            break;
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isPlaying]);

    return (
      <div className="bg-gray-900 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-green-400">🐍 Snake Classic</h3>
          <div className="flex gap-4 items-center">
            <span className="text-white">Score: {score}</span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={resetGame}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>
        
        <div className="bg-black p-4 rounded-lg">
          <div className="w-96 h-96 mx-auto relative">
            <div 
              className="grid gap-0 w-full h-full"
              style={{ gridTemplateColumns: 'repeat(20, 1fr)', gridTemplateRows: 'repeat(20, 1fr)' }}
            >
              {Array.from({ length: 400 }, (_, i) => {
                const row = Math.floor(i / 20);
                const col = i % 20;
                const isSnake = snake.some(segment => segment[0] === row && segment[1] === col);
                const isFood = food[0] === row && food[1] === col;
                
                return (
                  <div
                    key={i}
                    className={`border border-gray-800 ${
                      isSnake ? 'bg-green-500' : isFood ? 'bg-red-500' : 'bg-gray-900'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
        
        {gameOver && (
          <div className="text-center mt-4">
            <p className="text-red-400 text-xl font-bold">Game Over!</p>
            <p className="text-gray-300">Final Score: {score}</p>
          </div>
        )}
        
        <div className="text-center text-gray-400 text-sm mt-4">
          Use arrow keys to move • Space to pause • Eat the red food!
        </div>
      </div>
    );
  };

  // 2048 Game Component
  const Game2048 = () => {
    const [board, setBoard] = useState(() => {
      const newBoard = Array(4).fill(null).map(() => Array(4).fill(0));
      // Add two initial tiles
      addRandomTile(newBoard);
      addRandomTile(newBoard);
      return newBoard;
    });
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    function addRandomTile(board: number[][]) {
      const emptyCells = [];
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (board[i][j] === 0) emptyCells.push([i, j]);
        }
      }
      if (emptyCells.length > 0) {
        const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        board[row][col] = Math.random() < 0.9 ? 2 : 4;
      }
    }

    const resetGame = () => {
      const newBoard = Array(4).fill(null).map(() => Array(4).fill(0));
      addRandomTile(newBoard);
      addRandomTile(newBoard);
      setBoard(newBoard);
      setScore(0);
      setGameOver(false);
    };

    const move = (direction: string) => {
      if (gameOver) return;

      const newBoard = board.map(row => [...row]);
      let moved = false;
      let newScore = score;

      const moveLeft = () => {
        for (let i = 0; i < 4; i++) {
          const row = newBoard[i].filter(val => val !== 0);
          for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
              row[j] *= 2;
              newScore += row[j];
              row[j + 1] = 0;
            }
          }
          const newRow = row.filter(val => val !== 0);
          while (newRow.length < 4) newRow.push(0);
          
          if (JSON.stringify(newBoard[i]) !== JSON.stringify(newRow)) {
            moved = true;
            newBoard[i] = newRow;
          }
        }
      };

      const moveRight = () => {
        for (let i = 0; i < 4; i++) {
          const row = newBoard[i].filter(val => val !== 0).reverse();
          for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
              row[j] *= 2;
              newScore += row[j];
              row[j + 1] = 0;
            }
          }
          const newRow = row.filter(val => val !== 0);
          while (newRow.length < 4) newRow.push(0);
          
          if (JSON.stringify(newBoard[i]) !== JSON.stringify(newRow.reverse())) {
            moved = true;
            newBoard[i] = newRow.reverse();
          }
        }
      };

      const moveUp = () => {
        for (let j = 0; j < 4; j++) {
          const column = [];
          for (let i = 0; i < 4; i++) {
            if (newBoard[i][j] !== 0) column.push(newBoard[i][j]);
          }
          
          for (let i = 0; i < column.length - 1; i++) {
            if (column[i] === column[i + 1]) {
              column[i] *= 2;
              newScore += column[i];
              column[i + 1] = 0;
            }
          }
          
          const newColumn = column.filter(val => val !== 0);
          while (newColumn.length < 4) newColumn.push(0);
          
          for (let i = 0; i < 4; i++) {
            if (newBoard[i][j] !== newColumn[i]) {
              moved = true;
              newBoard[i][j] = newColumn[i];
            }
          }
        }
      };

      const moveDown = () => {
        for (let j = 0; j < 4; j++) {
          const column = [];
          for (let i = 3; i >= 0; i--) {
            if (newBoard[i][j] !== 0) column.push(newBoard[i][j]);
          }
          
          for (let i = 0; i < column.length - 1; i++) {
            if (column[i] === column[i + 1]) {
              column[i] *= 2;
              newScore += column[i];
              column[i + 1] = 0;
            }
          }
          
          const newColumn = column.filter(val => val !== 0);
          while (newColumn.length < 4) newColumn.push(0);
          
          for (let i = 0; i < 4; i++) {
            if (newBoard[3 - i][j] !== newColumn[i]) {
              moved = true;
              newBoard[3 - i][j] = newColumn[i];
            }
          }
        }
      };

      switch (direction) {
        case 'left': moveLeft(); break;
        case 'right': moveRight(); break;
        case 'up': moveUp(); break;
        case 'down': moveDown(); break;
      }

      if (moved) {
        addRandomTile(newBoard);
        setBoard(newBoard);
        setScore(newScore);
      }
    };

    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        switch (e.key) {
          case 'ArrowLeft': e.preventDefault(); move('left'); break;
          case 'ArrowRight': e.preventDefault(); move('right'); break;
          case 'ArrowUp': e.preventDefault(); move('up'); break;
          case 'ArrowDown': e.preventDefault(); move('down'); break;
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }, [board, gameOver, score]);

    const getTileColor = (value: number) => {
      const colors: { [key: number]: string } = {
        0: 'bg-gray-300',
        2: 'bg-gray-100 text-gray-800',
        4: 'bg-gray-200 text-gray-800',
        8: 'bg-orange-200 text-orange-800',
        16: 'bg-orange-300 text-orange-900',
        32: 'bg-orange-400 text-white',
        64: 'bg-orange-500 text-white',
        128: 'bg-yellow-400 text-white',
        256: 'bg-yellow-500 text-white',
        512: 'bg-yellow-600 text-white',
        1024: 'bg-red-500 text-white',
        2048: 'bg-red-600 text-white'
      };
      return colors[value] || 'bg-red-700 text-white';
    };

    return (
      <div className="bg-gray-900 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-blue-400">🧩 2048 Logic</h3>
          <div className="flex gap-4 items-center">
            <span className="text-white">Score: {score}</span>
            <button
              onClick={resetGame}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              New Game
            </button>
          </div>
        </div>
        
        <div className="bg-gray-600 p-4 rounded-lg w-96 h-96 mx-auto">
          <div className="grid grid-cols-4 gap-2 h-full">
            {board.flat().map((value, index) => (
              <div
                key={index}
                className={`flex items-center justify-center text-xl font-bold rounded ${getTileColor(value)}`}
              >
                {value !== 0 && value}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center text-gray-400 text-sm mt-4">
          Use arrow keys to move tiles • Combine tiles to reach 2048!
        </div>
      </div>
    );
  };

  // Slope Game Component
  const SlopeGame = () => {
    const [ball, setBall] = useState({ x: 50, y: 80 });
    const [velocity, setVelocity] = useState({ x: 2, y: 0 });
    const [obstacles, setObstacles] = useState<Array<{x: number, y: number, width: number, height: number}>>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const resetGame = () => {
      setBall({ x: 50, y: 80 });
      setVelocity({ x: 2, y: 0 });
      setObstacles([]);
      setScore(0);
      setGameOver(false);
      setIsPlaying(false);
    };

    const gameLoop = useCallback(() => {
      if (!isPlaying || gameOver) return;

      setBall(prevBall => {
        const newY = Math.max(10, Math.min(90, prevBall.y + velocity.y));
        const newX = prevBall.x + velocity.x;
        
        // Check boundaries
        if (newY <= 10 || newY >= 90) {
          setGameOver(true);
          setIsPlaying(false);
          return prevBall;
        }

        return { x: newX, y: newY };
      });

      setVelocity(prev => ({ ...prev, y: prev.y + 0.3 })); // Gravity
      setScore(s => s + 1);

      // Generate obstacles
      if (Math.random() < 0.02) {
        setObstacles(prev => [...prev, {
          x: 100,
          y: Math.random() * 60 + 20,
          width: 20,
          height: Math.random() * 20 + 10
        }]);
      }

      // Move obstacles
      setObstacles(prev => prev.map(obs => ({ ...obs, x: obs.x - 3 })).filter(obs => obs.x > -20));
    }, [isPlaying, gameOver, velocity.y]);

    useEffect(() => {
      const interval = setInterval(gameLoop, 50);
      return () => clearInterval(interval);
    }, [gameLoop]);

    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === ' ') {
          e.preventDefault();
          if (isPlaying) {
            setVelocity(prev => ({ ...prev, y: -4 })); // Jump
          }
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isPlaying]);

    return (
      <div className="bg-gray-900 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-orange-400">🏔️ Slope Runner</h3>
          <div className="flex gap-4 items-center">
            <span className="text-white">Score: {score}</span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={resetGame}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>
        
        <div className="bg-gradient-to-b from-purple-900 to-black p-4 rounded-lg w-96 h-96 mx-auto relative overflow-hidden">
          {/* Ball */}
          <div 
            className="absolute w-4 h-4 bg-orange-400 rounded-full transition-all duration-75"
            style={{ left: `${ball.x}%`, top: `${ball.y}%` }}
          />
          
          {/* Obstacles */}
          {obstacles.map((obs, i) => (
            <div
              key={i}
              className="absolute bg-red-600"
              style={{
                left: `${obs.x}%`,
                top: `${obs.y}%`,
                width: `${obs.width}px`,
                height: `${obs.height}px`
              }}
            />
          ))}
          
          {/* Ground lines for effect */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-pink-600"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-pink-600"></div>
        </div>
        
        {gameOver && (
          <div className="text-center mt-4">
            <p className="text-red-400 text-xl font-bold">Crashed!</p>
            <p className="text-gray-300">Final Score: {score}</p>
          </div>
        )}
        
        <div className="text-center text-gray-400 text-sm mt-4">
          Spacebar to jump • Avoid the red obstacles • Survive as long as possible!
        </div>
      </div>
    );
  };

  // FiveM Lockpicking Game
  const LockpickGame = () => {
    const [pins, setPins] = useState(Array(5).fill(0));
    const [currentPin, setCurrentPin] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameActive, setGameActive] = useState(false);
    const [lockPicked, setLockPicked] = useState(false);

    const resetGame = () => {
      setPins(Array(5).fill(0));
      setCurrentPin(0);
      setScore(0);
      setTimeLeft(30);
      setGameActive(false);
      setLockPicked(false);
    };

    const startGame = () => {
      resetGame();
      setGameActive(true);
    };

    useEffect(() => {
      if (gameActive && timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
        return () => clearTimeout(timer);
      } else if (timeLeft === 0) {
        setGameActive(false);
      }
    }, [gameActive, timeLeft]);

    const pickPin = () => {
      if (!gameActive || lockPicked) return;

      const success = Math.random() > 0.3; // 70% success rate
      if (success) {
        const newPins = [...pins];
        newPins[currentPin] = 1;
        setPins(newPins);
        setScore(s => s + 100);
        
        if (currentPin < 4) {
          setCurrentPin(c => c + 1);
        } else {
          setLockPicked(true);
          setGameActive(false);
          setScore(s => s + 500); // Bonus for completing
        }
      } else {
        // Reset current pin
        const newPins = [...pins];
        newPins[currentPin] = 0;
        setPins(newPins);
        setScore(s => Math.max(0, s - 50));
      }
    };

    return (
      <div className="bg-gray-900 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-yellow-400">🔓 Fleeca Bank Lockpick</h3>
          <div className="flex gap-4 items-center">
            <span className="text-white">Score: {score}</span>
            <span className="text-white">Time: {timeLeft}s</span>
            <button
              onClick={startGame}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
            >
              {gameActive ? 'Restart' : 'Start Heist'}
            </button>
          </div>
        </div>
        
        <div className="bg-black p-8 rounded-lg w-96 h-96 mx-auto flex flex-col items-center justify-center">
          {lockPicked ? (
            <div className="text-center">
              <div className="text-6xl mb-4">🏦</div>
              <p className="text-green-400 text-2xl font-bold">BANK UNLOCKED!</p>
              <p className="text-yellow-400 text-lg">Bonus: +500 points</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-4xl mb-6">🔒</div>
              <div className="flex gap-4 mb-8">
                {pins.map((pin, i) => (
                  <div
                    key={i}
                    className={`w-8 h-16 border-2 rounded ${
                      pin === 1 ? 'bg-green-500 border-green-400' : 
                      i === currentPin ? 'bg-yellow-500 border-yellow-400' : 
                      'bg-gray-700 border-gray-600'
                    } flex items-end justify-center pb-2`}
                  >
                    {pin === 1 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                ))}
              </div>
              
              {gameActive ? (
                <button
                  onClick={pickPin}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold"
                >
                  PICK LOCK
                </button>
              ) : (
                <p className="text-gray-400">Click Start Heist to begin</p>
              )}
            </div>
          )}
        </div>
        
        <div className="text-center text-gray-400 text-sm mt-4">
          Pick all 5 pins before time runs out • Failed attempts reduce score
        </div>
      </div>
    );
  };

  // FiveM Hacking Game
  const HackingGame = () => {
    const [sequence, setSequence] = useState<number[]>([]);
    const [playerInput, setPlayerInput] = useState<number[]>([]);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [gameActive, setGameActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
    const [showSequence, setShowSequence] = useState(false);

    const generateSequence = (length: number) => {
      return Array.from({ length }, () => Math.floor(Math.random() * 9) + 1);
    };

    const startGame = () => {
      const newSequence = generateSequence(3 + level);
      setSequence(newSequence);
      setPlayerInput([]);
      setCurrentNumber(0);
      setGameActive(true);
      setTimeLeft(10 + level * 2);
      setShowSequence(true);
      
      // Hide sequence after 3 seconds
      setTimeout(() => setShowSequence(false), 3000);
    };

    const resetGame = () => {
      setSequence([]);
      setPlayerInput([]);
      setCurrentNumber(0);
      setScore(0);
      setLevel(1);
      setGameActive(false);
      setTimeLeft(10);
      setShowSequence(false);
    };

    useEffect(() => {
      if (gameActive && timeLeft > 0 && !showSequence) {
        const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
        return () => clearTimeout(timer);
      } else if (timeLeft === 0 && gameActive) {
        setGameActive(false);
      }
    }, [gameActive, timeLeft, showSequence]);

    const inputNumber = (num: number) => {
      if (!gameActive || showSequence) return;

      const newInput = [...playerInput, num];
      setPlayerInput(newInput);

      if (newInput[newInput.length - 1] !== sequence[newInput.length - 1]) {
        // Wrong input
        setGameActive(false);
        return;
      }

      if (newInput.length === sequence.length) {
        // Sequence completed
        setScore(s => s + level * 100);
        setLevel(l => l + 1);
        setTimeout(startGame, 1000);
      }
    };

    return (
      <div className="bg-gray-900 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-cyan-400">💻 System Hack</h3>
          <div className="flex gap-4 items-center">
            <span className="text-white">Score: {score}</span>
            <span className="text-white">Level: {level}</span>
            <span className="text-white">Time: {timeLeft}s</span>
            <button
              onClick={gameActive ? resetGame : startGame}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded"
            >
              {gameActive ? 'Reset' : 'Start Hack'}
            </button>
          </div>
        </div>
        
        <div className="bg-black p-8 rounded-lg w-96 h-96 mx-auto">
          {showSequence ? (
            <div className="text-center">
              <p className="text-cyan-400 text-lg mb-4">MEMORIZE SEQUENCE</p>
              <div className="flex justify-center gap-2 mb-4">
                {sequence.map((num, i) => (
                  <div key={i} className="w-12 h-12 bg-cyan-600 text-white flex items-center justify-center text-xl font-bold rounded">
                    {num}
                  </div>
                ))}
              </div>
              <p className="text-gray-400">Sequence will disappear in 3 seconds...</p>
            </div>
          ) : gameActive ? (
            <div className="text-center">
              <p className="text-cyan-400 text-lg mb-4">ENTER SEQUENCE</p>
              <div className="flex justify-center gap-2 mb-4">
                {sequence.map((_, i) => (
                  <div key={i} className={`w-12 h-12 border-2 flex items-center justify-center text-xl font-bold rounded ${
                    i < playerInput.length ? 'bg-green-600 text-white border-green-400' : 'border-gray-600 text-gray-400'
                  }`}>
                    {i < playerInput.length ? playerInput[i] : '?'}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-2 max-w-48 mx-auto">
                {Array.from({ length: 9 }, (_, i) => i + 1).map(num => (
                  <button
                    key={num}
                    onClick={() => inputNumber(num)}
                    className="w-12 h-12 bg-gray-700 hover:bg-gray-600 text-white rounded font-bold"
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center flex items-center justify-center h-full">
              <div>
                <div className="text-6xl mb-4">🖥️</div>
                <p className="text-gray-400">Click Start Hack to begin</p>
                {score > 0 && <p className="text-cyan-400 mt-2">Final Score: {score}</p>}
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center text-gray-400 text-sm mt-4">
          Memorize the sequence • Enter it correctly • Higher levels = longer sequences
        </div>
      </div>
    );
  };

  const games = [
    { id: 'snake', name: '🐍 Snake Classic', component: SnakeGame, color: 'from-green-600/20 to-emerald-600/20 border-green-400/30' },
    { id: '2048', name: '🧩 2048 Logic', component: Game2048, color: 'from-blue-600/20 to-cyan-600/20 border-blue-400/30' },
    { id: 'slope', name: '🏔️ Slope Runner', component: SlopeGame, color: 'from-orange-600/20 to-yellow-600/20 border-orange-400/30' },
    { id: 'lockpick', name: '🔓 Fleeca Bank', component: LockpickGame, color: 'from-yellow-600/20 to-amber-600/20 border-yellow-400/30' },
    { id: 'hack', name: '💻 System Hack', component: HackingGame, color: 'from-cyan-600/20 to-blue-600/20 border-cyan-400/30' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Back button */}
        <div className="absolute top-8 left-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors opacity-50 hover:opacity-100"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>← Back to homepage</span>
          </Link>
        </div>

        <div className="text-center max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            EduFocus Pro - Study Break Portal
          </h1>
          
          {selectedGame ? (
            <div className="space-y-6">
              <button
                onClick={() => setSelectedGame(null)}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg mb-6 flex items-center gap-2 mx-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Games Menu
              </button>
              
              {games.find(g => g.id === selectedGame)?.component && 
                React.createElement(games.find(g => g.id === selectedGame)!.component)
              }
            </div>
          ) : (
            <div className="space-y-8">
              {/* Congratulations section */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Crown className="w-12 h-12 text-yellow-400" />
                  <h2 className="text-4xl font-bold text-yellow-400">
                    ACCESS GRANTED!
                  </h2>
                  <Crown className="w-12 h-12 text-yellow-400" />
                </div>
                
                <div className="space-y-4">
                  <p className="text-2xl text-gray-200 mb-6">
                    🎮 Welcome to EduFocus Pro - Self-Hosted Activities! 🎮
                  </p>
                  <p className="text-xl text-gray-300">
                    These are built directly into the website - no external blocking possible!
                  </p>
                </div>
              </div>

              {/* Games Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {games.map((game) => (
                  <div key={game.id} className={`bg-gradient-to-br ${game.color} p-6 rounded-lg border cursor-pointer hover:scale-105 transition-transform`} onClick={() => setSelectedGame(game.id)}>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-white">{game.name}</h4>
                      <Gamepad2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">
                          {game.id === 'snake' && '🐍'}
                          {game.id === '2048' && '🧩'}
                          {game.id === 'slope' && '🏔️'}
                          {game.id === 'lockpick' && '🔓'}
                          {game.id === 'hack' && '💻'}
                        </div>
                        <p className="text-gray-400">Click to Play</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mt-4 text-center">
                      {game.id === 'snake' && 'Classic arcade action - eat food and grow!'}
                      {game.id === '2048' && 'Combine numbers to reach the 2048 tile'}
                      {game.id === 'slope' && 'Endless runner - jump over obstacles!'}
                      {game.id === 'lockpick' && 'FiveM-style bank heist lockpicking'}
                      {game.id === 'hack' && 'Memory sequence hacking minigame'}
                    </p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <h4 className="text-lg font-bold text-blue-400 mb-4 text-center">✨ Why Self-Hosted Works Better:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2 text-gray-300">
                    <p>✅ Built into the website - no external blocking</p>
                    <p>✅ Works on ANY network - no iframe restrictions</p>
                    <p>✅ Fast loading - no external dependencies</p>
                    <p>✅ Always available - no server downtime</p>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p>✅ Professional appearance - looks educational</p>
                    <p>✅ Keyboard controls - perfect for any device</p>
                    <p>✅ Lightweight and responsive design</p>
                    <p>✅ Completely undetectable by school filters</p>
                  </div>
                </div>
              </div>

                             {/* Pro Tips */}
               <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-400/20">
                 <h4 className="text-lg font-bold text-purple-300 mb-4 text-center">💡 Pro Tips:</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-300">
                   <div>
                     <p className="font-semibold text-green-400">🐍 Snake:</p>
                     <p>• Arrow keys to move</p>
                     <p>• Space bar to pause</p>
                     <p>• Eat red food to grow</p>
                   </div>
                   <div>
                     <p className="font-semibold text-blue-400">🧩 2048:</p>
                     <p>• Arrow keys to slide tiles</p>
                     <p>• Combine matching numbers</p>
                     <p>• Reach 2048 to win!</p>
                   </div>
                   <div>
                     <p className="font-semibold text-orange-400">🏔️ Slope:</p>
                     <p>• Spacebar to jump</p>
                     <p>• Avoid red obstacles</p>
                     <p>• Survive as long as possible</p>
                   </div>
                   <div>
                     <p className="font-semibold text-yellow-400">🔓 Lockpick:</p>
                     <p>• Click to pick each pin</p>
                     <p>• 30 seconds time limit</p>
                     <p>• Complete all 5 pins to win</p>
                   </div>
                   <div>
                     <p className="font-semibold text-cyan-400">💻 Hack:</p>
                     <p>• Memorize the sequence</p>
                     <p>• Enter numbers correctly</p>
                     <p>• Higher levels = longer sequences</p>
                   </div>
                 </div>
               </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default SecretPage; 