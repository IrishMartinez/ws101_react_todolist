import React, { useEffect, useRef, useState } from 'react';
import TOUCH from './Musics/TOUCH.mp3';
import GJWHF from './Musics/GJWHF.mp3';
import WHENEVER from './Musics/WHENEVER.mp3';
import TASTE from './Musics/TOUCH.mp3';
import OBSESSED from './Musics/OBSESSED.mp3';
import PLEASE from './Musics/PLEASE.mp3';
import ESPRESSO from './Musics/ESPRESSO.mp3';
import ANYMORE from './Musics/ANYMORE.mp3';
import FANTASIZE from './Musics/FANTASIZE.mp3';
import FEATHER from './Musics/FEATHER.mp3';

const RandomMusicPlayer = () => {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState('');
  const [isPlaying, setIsPlaying] = useState(false); // To track user interaction

  const songs = [TOUCH, GJWHF, WHENEVER, TASTE, OBSESSED, ANYMORE, ESPRESSO, FANTASIZE, FEATHER, PLEASE];

  const playRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const selectedSong = songs[randomIndex];
    setCurrentSong(selectedSong);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePlayClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      playRandomSong();
    }
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentSong, isPlaying]);

  return (
    <div>
      <h1>What are you up to today?</h1>
      <h5>~refresh for more vibe check~</h5>
      {!isPlaying && (
        <button className='play' onClick={handlePlayClick}>Click This For Vibe Check</button>
      )}
      {isPlaying && (
        <audio ref={audioRef} src={currentSong} autoPlay style={{ display: 'none' }} />
      )}
    </div>
  );
};

export default RandomMusicPlayer;
