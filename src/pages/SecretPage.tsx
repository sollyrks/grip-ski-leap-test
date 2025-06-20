import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Crown, Star, Gift, Medal, Sparkles, RotateCcw, Play } from 'lucide-react';

const SecretPage = () => {
  // 2048 Game State
  const [board2048, setBoard2048] = useState<number[][]>(() => 
    Array(4).fill(null).map(() => Array(4).fill(0))
  );
  const [score2048, setScore2048] = useState(0);
  const [gameOver2048, setGameOver2048] = useState(false);

  // Snake Game State
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState([0, 1]);
  const [gameRunning, setGameRunning] = useState(false);
  const [snakeScore, setSnakeScore] = useState(0);

  // Typing Test State
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [typingStarted, setTypingStarted] = useState(false);
  const [typingScore, setTypingScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  
  const words = ["education", "learning", "student", "teacher", "study", "book", "knowledge", "school", "class", "homework", "test", "grade", "lesson", "subject", "science", "math", "english", "history"];

  // 2048 Game Logic
  const addNewNumber = useCallback((grid: number[][]) => {
    const emptyCells: [number, number][] = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (grid[i][j] === 0) {
          emptyCells.push([i, j]);
        }
      }
    }
    if (emptyCells.length > 0) {
      const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      const newGrid = grid.map(row => [...row]);
      newGrid[randomCell[0]][randomCell[1]] = Math.random() < 0.9 ? 2 : 4;
      return newGrid;
    }
    return grid;
  }, []);

  const move2048 = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    if (gameOver2048) return;

    let newGrid = board2048.map(row => [...row]);
    let moved = false;
    let newScore = score2048;

    const moveLeft = (grid: number[][]) => {
      for (let i = 0; i < 4; i++) {
        let row = grid[i].filter(val => val !== 0);
        for (let j = 0; j < row.length - 1; j++) {
          if (row[j] === row[j + 1]) {
            row[j] *= 2;
            newScore += row[j];
            row[j + 1] = 0;
          }
        }
        row = row.filter(val => val !== 0);
        while (row.length < 4) row.push(0);
        
        for (let j = 0; j < 4; j++) {
          if (grid[i][j] !== row[j]) moved = true;
          grid[i][j] = row[j];
        }
      }
    };

    if (direction === 'left') {
      moveLeft(newGrid);
    } else if (direction === 'right') {
      newGrid = newGrid.map(row => row.reverse());
      moveLeft(newGrid);
      newGrid = newGrid.map(row => row.reverse());
    } else if (direction === 'up') {
      newGrid = newGrid[0].map((_, i) => newGrid.map(row => row[i]));
      moveLeft(newGrid);
      newGrid = newGrid[0].map((_, i) => newGrid.map(row => row[i]));
    } else if (direction === 'down') {
      newGrid = newGrid[0].map((_, i) => newGrid.map(row => row[i]).reverse());
      moveLeft(newGrid);
      newGrid = newGrid[0].map((_, i) => newGrid.map(row => row[i]).reverse());
    }

    if (moved) {
      newGrid = addNewNumber(newGrid);
      setBoard2048(newGrid);
      setScore2048(newScore);
    }
  }, [board2048, gameOver2048, score2048, addNewNumber]);

  const reset2048 = useCallback(() => {
    let newGrid = Array(4).fill(null).map(() => Array(4).fill(0));
    newGrid = addNewNumber(addNewNumber(newGrid));
    setBoard2048(newGrid);
    setScore2048(0);
    setGameOver2048(false);
  }, [addNewNumber]);

  // Snake Game Logic
  const moveSnake = useCallback(() => {
    if (!gameRunning) return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = [newSnake[0][0] + direction[0], newSnake[0][1] + direction[1]];

      // Check boundaries
      if (head[0] < 0 || head[0] >= 20 || head[1] < 0 || head[1] >= 20) {
        setGameRunning(false);
        return currentSnake;
      }

      // Check self collision
      if (newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
        setGameRunning(false);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head[0] === food[0] && head[1] === food[1]) {
        setSnakeScore(prev => prev + 10);
        setFood([
          Math.floor(Math.random() * 20),
          Math.floor(Math.random() * 20)
        ]);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameRunning]);

  const startSnake = () => {
    setSnake([[10, 10]]);
    setDirection([0, 1]);
    setGameRunning(true);
    setSnakeScore(0);
    setFood([5, 5]);
  };

  // Typing Test Logic
  const checkTyping = (value: string) => {
    setUserInput(value);
    if (value === words[currentWordIndex]) {
      setTypingScore(prev => prev + 1);
      setCurrentWordIndex(prev => (prev + 1) % words.length);
      setUserInput('');
    }
  };

  const startTypingTest = () => {
    setTypingStarted(true);
    setTimeLeft(60);
    setTypingScore(0);
    setCurrentWordIndex(0);
    setUserInput('');
  };

  // Effects
  useEffect(() => {
    reset2048();
  }, [reset2048]);

  useEffect(() => {
    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  }, [moveSnake]);

  useEffect(() => {
    if (typingStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setTypingStarted(false);
    }
  }, [typingStarted, timeLeft]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        move2048('up');
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        move2048('down');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        move2048('left');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        move2048('right');
      }

      // Snake controls
      if (gameRunning) {
        if (e.key === 'w' && direction[0] !== 1) setDirection([-1, 0]);
        if (e.key === 's' && direction[0] !== -1) setDirection([1, 0]);
        if (e.key === 'a' && direction[1] !== 1) setDirection([0, -1]);
        if (e.key === 'd' && direction[1] !== -1) setDirection([0, 1]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [move2048, direction, gameRunning]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white relative overflow-hidden">
      {/* Secret content */}
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

        {/* Main secret content */}
        <div className="text-center max-w-6xl mx-auto">
          {/* Activity portal title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            EduFocus Pro - Study Break Portal
          </h1>
          
          {/* Congratulations section */}
          <div className="space-y-8">
            {/* Main congratulations */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Crown className="w-12 h-12 text-yellow-400" />
                <h2 className="text-4xl font-bold text-yellow-400">
                  CONGRATULATIONS!
                </h2>
                <Crown className="w-12 h-12 text-yellow-400" />
              </div>
              
              <div className="space-y-4">
                <p className="text-2xl text-gray-200 mb-6">
                  🧠 Welcome to EduFocus Pro - Premium Study Break Activities! 🧠
                </p>
                <p className="text-xl text-gray-300">
                  Educational tools designed to help students relax and refocus during study sessions!
                </p>
              </div>
            </div>

            {/* Embedded Games */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">🎯 Interactive Study Tools:</h3>
              
              {/* Games Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
                
                {/* 2048 Game */}
                <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 p-6 rounded-lg border border-yellow-400/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-yellow-300">🔢 2048 Logic</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400 text-sm">Score: {score2048}</span>
                      <button 
                        onClick={reset2048}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white p-1 rounded text-xs"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mb-4 bg-gray-800 p-3 rounded">
                    {board2048.map((row, i) => 
                      row.map((cell, j) => (
                        <div 
                          key={`${i}-${j}`}
                          className="w-12 h-12 bg-gray-700 rounded flex items-center justify-center text-sm font-bold"
                          style={{
                            backgroundColor: cell ? `hsl(${Math.log2(cell) * 15}, 70%, 50%)` : '#374151',
                            color: cell > 4 ? 'white' : 'black'
                          }}
                        >
                          {cell || ''}
                        </div>
                      ))
                    )}
                  </div>
                  <p className="text-gray-400 text-xs text-center">Use arrow keys to play</p>
                </div>

                {/* Snake Game */}
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-lg border border-green-400/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-green-300">🐍 Reflex Trainer</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-sm">Score: {snakeScore}</span>
                      <button 
                        onClick={startSnake}
                        className="bg-green-600 hover:bg-green-700 text-white p-1 rounded text-xs"
                      >
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-20 gap-0 mb-4 bg-gray-800 p-2 rounded" style={{gridTemplateColumns: 'repeat(20, 1fr)'}}>
                    {Array(400).fill(0).map((_, i) => {
                      const row = Math.floor(i / 20);
                      const col = i % 20;
                      const isSnake = snake.some(segment => segment[0] === row && segment[1] === col);
                      const isFood = food[0] === row && food[1] === col;
                      return (
                        <div 
                          key={i}
                          className={`w-2 h-2 ${
                            isSnake ? 'bg-green-400' : 
                            isFood ? 'bg-red-400' : 
                            'bg-gray-700'
                          }`}
                        />
                      );
                    })}
                  </div>
                  <p className="text-gray-400 text-xs text-center">Use WASD to control</p>
                </div>

                {/* Typing Test */}
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-400/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-blue-300">⌨️ Speed Typing</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 text-sm">WPM: {typingScore}</span>
                      <span className="text-yellow-400 text-sm">Time: {timeLeft}s</span>
                    </div>
                  </div>
                  
                  {!typingStarted ? (
                    <div className="text-center">
                      <button 
                        onClick={startTypingTest}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                      >
                        Start Test
                      </button>
                      <p className="text-gray-400 text-sm">60-second typing challenge</p>
                    </div>
                  ) : (
                    <div>
                      <div className="bg-gray-800 p-4 rounded mb-4">
                        <p className="text-lg text-center text-yellow-400 font-bold mb-2">
                          {words[currentWordIndex]}
                        </p>
                        <input 
                          type="text"
                          value={userInput}
                          onChange={(e) => checkTyping(e.target.value)}
                          className="w-full bg-gray-700 text-white p-2 rounded text-center"
                          placeholder="Type the word above..."
                          autoFocus
                        />
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Educational Features */}
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <h4 className="text-lg font-bold text-blue-400 mb-4 text-center">✨ Why These Tools Are Perfect:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2 text-gray-300">
                    <p>✅ Embedded directly - no external blocks</p>
                    <p>✅ Cognitive function improvement</p>
                    <p>✅ Perfect for 5-10 minute study breaks</p>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p>✅ Stress relief and mental refreshment</p>
                    <p>✅ Educational value recognized by teachers</p>
                    <p>✅ Works on any school device or network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static decorative elements */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default SecretPage; 