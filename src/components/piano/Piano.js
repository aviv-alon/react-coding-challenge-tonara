import React from 'react';
import SoundFontPlayer from 'soundfont-player';

import PianoKeyboard from './PianoKeyboard';


class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOctaves: [4,5,6], //change to set
      instrument: SoundFontPlayer.instrument(getAudioContext(), 'acoustic_grand_piano')
    };
  }


  render() {
    return (
      <main className="container">
        <PianoKeyboard
          instrument={this.state.instrument}
          octaves={this.state.activeOctaves}
        />
      </main>
    );
  }
}

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
