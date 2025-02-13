import React, { useState, useEffect, useRef } from 'react';
import { Heart, ArrowRight, Gift, Music, Sparkles, PenTool, Volume2, VolumeX } from 'lucide-react';


const ValentinesExperience = () => {
  const [stage, setStage] = useState('initial');
  const [loveImage, setLoveImage] = useState('');
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y:0 });
  const [showSparkles, setShowSparkles] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [loveNote, setLoveNote] = useState('');
  const [showLoveNote, setShowLoveNote] = useState(false);
  const [hearts, setHearts] = useState([]);
  const audioRef = useRef(null);
  const [selectedChoices, setSelectedChoices] = useState({
    food: null,
    activity: null,
    surprise: null
  });

  // Background music setup
  useEffect(() => {
    audioRef.current = new Audio('/play.mp3'); // Replace with your actual music file
    audioRef.current.loop = true;
    audioRef.current.addEventListener('error', (e) => {
      console.error('Error loading audio:', e);
    });
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('error', () => {});
      }
    };
  }, []);

  const toggleMusic = () => {
    if (isMuted) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsMuted(!isMuted);
  };

  // Floating hearts animation
  const addHeart = (e) => {
    const coords = e.touches ? {
      clientX: e.touches[0].clientX,
      clientY: e.touches[0].clientY
    } : {
      clientX: e.clientX,
      clientY: e.clientY
    };

    const newHeart = {
      id: Date.now(),
      x: coords.clientX,
      y: coords.clientY,
    };
    setHearts(prev => [...prev, newHeart]);
    setTimeout(() => {
      setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
    }, 2000);
  };
  
  

  const moveNoButton = () => {
    const button = document.getElementById("no-button"); // Ensure you have an ID assigned
    if (!button) return;
  
    const buttonWidth = button.offsetWidth || 100; // Dynamically get button width
    const buttonHeight = button.offsetHeight || 50; // Dynamically get button height
    const padding = 10; // Ensures space from screen edges
  
    // Get the viewport width and height
    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;
  
    // Generate a new position within valid range
    const newX = Math.max(padding, Math.min(Math.random() * maxX, maxX));
    const newY = Math.max(padding, Math.min(Math.random() * maxY, maxY));
  
    // Update button position
    setNoButtonPosition({ x: newX, y: newY });
  };
  

  const options = {
    food: [
      { id: 'dinner', title: 'Candlelit Dinner', icon: '🕯️', description: 'A romantic evening under soft candlelight' },
      { id: 'street', title: 'Street Food Adventure', icon: '🌮', description: 'Exploring delicious local treasures together' },
      { id: 'homemade', title: 'Homemade Meal', icon: '👩‍🍳', description: 'Cooking with love, just for you' },
    ],
    activity: [
      { id: 'walk', title: 'Scenic Night Walk', icon: '🌙', description: 'Under the stars, hand in hand' },
      { id: 'movie', title: 'Cozy Movie Night', icon: '🎬', description: 'Snuggled up with your favorite films' },
      { id: 'arcade', title: 'Fun Arcade Date', icon: '🎮', description: 'Playing games and winning prizes' },
    ],
    surprise: [
      { id: 'gift', title: 'Virtual Gift', icon: '🎁', description: 'A special surprise just for you' },
      { id: 'letter', title: 'Love Letter', icon: '💌', description: 'Words from the heart' },
      { id: 'fireworks', title: 'Fireworks Show', icon: '🎆', description: 'Lighting up the sky for our love' },
    ],
  };

  const handleChoice = (category, choice) => {
    setSelectedChoices(prev => ({
      ...prev,
      [category]: choice
    }));
    setShowSparkles(true);
    setTimeout(() => setShowSparkles(false), 1000);
    
    if (category === 'food') setStage('activity');
    else if (category === 'activity') setStage('surprise');
    else if (category === 'surprise') setStage('final');
  };

  // Floating background hearts
  const FloatingHearts = () => (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-pink-500 animate-float"
          style={{
            left: heart.x,
            top: heart.y,
            animation: 'float 2s ease-out forwards',
          }}
        >
          <Heart className="w-6 h-6" />
        </div>
      ))}
    </div>
  );
  
  const romanticNotes = [
    {
      text: "You're the sunshine that brightens my darkest days. 💖",
      img: "/hands.jpg",
    },
    {
      text: "Every moment with you is a beautiful memory in the making. ❤️",
      img: "heart.jpg",
    },
    {
      text: "You are my heart's greatest adventure. 💕",
      img: "/ground.jpg",
    },
    {
      text: "Falling in love with you was the best decision of my life. 🥰",
      img: "/cute.jpg",
    },
    {
      text: "You make my world magical just by being in it. 🌟",
      img: "/selfi.jpg",
    },
  ];
  
  const getRandomNote = () => {
    return romanticNotes[Math.floor(Math.random() * romanticNotes.length)];
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center relative overflow-hidden"
      onClick={addHeart}
      onTouchStart={addHeart}
    >
      {/* Background Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-full animate-pulse opacity-20">
          <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute inset-0 bg-purple-200 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
      </div>

      {/* Floating Hearts */}
      <FloatingHearts />

      {/* Music Toggle */}
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
      >
        {isMuted ? <VolumeX className="text-pink-500" /> : <Volume2 className="text-pink-500" />}
      </button>

      {/* Sparkles Effect */}
      {showSparkles && (
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-full h-full text-pink-400 animate-spin" />
          </div>
        </div>
      )}

      {stage === 'initial' && (
        <div className="text-center relative z-10">
          <h1 className="text-4xl font-bold text-pink-600 mb-8 animate-bounce">
            Will you be my Valentine? 💝
          </h1>
          <div className="space-y-4">
            <button
              onClick={() => setStage('food')}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-xl font-bold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Yes! 💖
            </button>
            <button
            id='no-button'
              style={{
                position: 'absolute',
                left: `${noButtonPosition.x}px`,
                top: `${noButtonPosition.y}px`,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              className="bg-gray-400 text-white px-8 py-3 rounded-full text-xl font-bold"
            >
              No
            </button>
          </div>
        </div>
      )}

      {(stage === 'food' || stage === 'activity' || stage === 'surprise') && (
        <div className="w-full max-w-md relative z-10">
          <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center animate-pulse">
            {stage === 'food' && "What shall we eat? 🍽️"}
            {stage === 'activity' && "Where to next? 🌟"}
            {stage === 'surprise' && "One last surprise! ✨"}
          </h2>
          <div className="grid gap-4">
            {options[stage].map((option) => (
              <button
                key={option.id}
                onClick={() => handleChoice(stage, option.id)}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex flex-col items-center space-y-2"
              >
                <span className="text-4xl mb-2">{option.icon}</span>
                <span className="text-xl font-medium text-gray-800">{option.title}</span>
                <p className="text-sm text-gray-600">{option.description}</p>
                <ArrowRight className="text-pink-400 mt-2" />
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === 'final' && (
        <div className="text-center relative z-10">
          <h2 className="text-4xl font-bold text-pink-600 mb-6 animate-pulse">
            Our Perfect Valentine's Day! 💖
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto">
            <p className="text-lg text-gray-800 mb-6">
              We'll enjoy a {selectedChoices.food === 'dinner' ? 'romantic candlelit dinner' :
                selectedChoices.food === 'street' ? 'fun street food adventure' : 'special homemade meal'},
              followed by a {selectedChoices.activity === 'walk' ? 'magical night walk' :
                selectedChoices.activity === 'movie' ? 'cozy movie night' : 'thrilling arcade date'},
              ending with {selectedChoices.surprise === 'gift' ? 'a special gift' :
                selectedChoices.surprise === 'letter' ? 'a heartfelt love letter' : 'spectacular fireworks'}!
            </p>
            
            {/* Love Note Feature */}
            
 


{/* Love Note Feature */}
{!showLoveNote ? (
  <button
    onClick={() => {
      const randomNote = getRandomNote();
      setLoveNote(randomNote.text);
      setLoveImage(randomNote.img);
      setShowLoveNote(true);
    }}
    className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
  >
    <PenTool className="w-5 h-5" />
    <span>Show a Love Note</span>
  </button>
) : (
  <div className="space-y-4 text-center">
    <div className="w-full p-4 border-2 border-pink-300 bg-pink-100 rounded-lg text-lg font-semibold text-pink-700">
      {loveNote}
    </div>
    <img src={loveImage} alt="Romantic" className="mx-auto rounded-lg w-64 h-auto shadow-md" />
    <button
      onClick={() => setShowLoveNote(false)}
      className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-600 transition-all"
    >
      Close 💝
    </button>
  </div>
)}
            
            <div className="flex justify-center space-x-4 mt-6">
              <Heart className="text-pink-500 animate-pulse" />
              <Music className="text-pink-400 animate-bounce" />
              <Gift className="text-pink-600 animate-spin" />
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateY(-100px) scale(0);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ValentinesExperience;