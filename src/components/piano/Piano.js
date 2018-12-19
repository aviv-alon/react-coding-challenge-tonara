import React from 'react';
import SoundFontPlayer from 'soundfont-player';

import PianoKeyboard from './PianoKeyboard';
import instrumentList from './fluidR3.json';

class Piano extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeOctaves: [4,5,6],
      instrumentName: 'acoustic_grand_piano',
      instrumentPlayer: null

    };

    this.updateInstrumentPlayer = this.updateInstrumentPlayer.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  updateInstrumentPlayer() {
    const ac = getAudioContext();
    const instrument =  SoundFontPlayer.instrument(ac, this.state.instrumentName);
    this.setState({instrumentPlayer: instrument});
  }

  componentDidMount() {
    this.updateInstrumentPlayer();
  }

  // componentDidUpdate() {
  //   const ac = getAudioContext();
  //   const instrument =  SoundFontPlayer.instrument(ac, this.state.instrumentName);
  //   this.setState({instrumentPlayer: instrument});
  // }

  handleChange(event) {
    this.setState({instrumentName: event.target.value});
    this.updateInstrumentPlayer();
    console.log('handleChange');

  }


  render() {
    console.log('render');
    console.log(this.state);
    return (
      <main className="container">
        {/* Main container */}
        <div className="level">
          {/* Left side */}
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-5">
                Octave
              </p>
            </div>
            <div className="level-item">
              <div className="tags are-medium">
                <span className="tag">1</span>
                <span className="tag">2</span>
                <span className="tag">3</span>
                <span className="tag">4</span>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="level-right">
            <div className="level-item">
              <p className="subtitle is-5">
                Instrument
              </p>
            </div>

            <div className=" level-item select is-rounded">
              <select value={this.state.instrumentName} onChange={this.handleChange}>
                {instrumentList.map((instrument) =>
                  <option key={instrument} value={instrument}>{instrument}</option>
                )}
              </select>
            </div>
          </div>
        </div>
        <PianoKeyboard
          instrument={this.state.instrumentPlayer}
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
