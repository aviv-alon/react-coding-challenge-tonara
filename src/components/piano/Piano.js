import React from 'react';
import SoundFontPlayer from 'soundfont-player';

import PianoKeyboard from './PianoKeyboard';



const Piano = ({activeOctaves = [4,5,6], instrumentName = 'acoustic_grand_piano'}) => {
  const instrumentPlayer = SoundFontPlayer.instrument(getAudioContext(), instrumentName);
  return (
    <main className="container">
      <PianoKeyboard
        instrument= {instrumentPlayer}
        octaves= {activeOctaves}
      />
    </main>
  );
};


function getAudioContext() {
  const AudioContext =
    window.AudioContext || // Default
    window.webkitAudioContext || // Safari and old versions of Chrome
    false;
  if (!AudioContext) {
    console.warn(
      'Sorry but the WebAudio API is not supported on this browser!'
    );
    return {};
  }
  return new AudioContext();
}

export default Piano;
