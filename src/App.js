/**
 * Together with Touch - Bangalore 2021
 */

import './App.css';
import * as Tone from 'tone';
import React, { useState } from 'react';
import * as dat from 'dat.gui';
import { AutoFilter } from 'tone';

const AMinorScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const addOctaveNumbers = (scale, octaveNumber) => scale.map(note => {
    const firstOctaveNoteIndex = scale.indexOf('C') !== -1 ? scale.indexOf('C') : scale.indexOf('C#')
    const noteOctaveNumber = scale.indexOf(note) < firstOctaveNoteIndex ? octaveNumber - 1 : octaveNumber;
    return `${note}${noteOctaveNumber}`
});

const constructMajorChord = (scale, octave, rootNote) => {
    const scaleWithOctave = addOctaveNumbers(scale, octave);

    const getNextChordNote = (note, nextNoteNumber) => {
        const nextNoteInScaleIndex = scaleWithOctave.indexOf(note) + nextNoteNumber - 1;
        let nextNote;
        if (typeof (scaleWithOctave[nextNoteInScaleIndex]) !== 'undefined') {
            nextNote = scaleWithOctave[nextNoteInScaleIndex];
        } else {
            nextNote = scaleWithOctave[nextNoteInScaleIndex - 7];
            const updatedOctave = parseInt(nextNote.slice(1)) + 1;
            nextNote = `${nextNote.slice(0, 1)}${updatedOctave}`;
        }

        return nextNote;
    }

    const thirdNote = getNextChordNote(rootNote, 3)
    const fifthNote = getNextChordNote(rootNote, 5)
    const chord = [rootNote, thirdNote, fifthNote]

    return chord
}

const constructChords = (scale, octave) => {
    const scaleWithOctave = addOctaveNumbers(scale, octave);

    const getNextChordNote = (note, nextNoteNumber) => {
        const nextNoteInScaleIndex = scaleWithOctave.indexOf(note) + nextNoteNumber - 1;
        let nextNote;
        if (typeof (scaleWithOctave[nextNoteInScaleIndex]) !== 'undefined') {
            nextNote = scaleWithOctave[nextNoteInScaleIndex];
        } else {
            nextNote = scaleWithOctave[nextNoteInScaleIndex - 6];
            const updatedOctave = parseInt(nextNote.slice(1)) + 1;
            nextNote = `${nextNote.slice(0, 1)}${updatedOctave}`;
        }

        return nextNote;
    }


    const chordArray = scaleWithOctave.map(note => {
        let thirdNote = getNextChordNote(note, 3)
        let fifthNote = getNextChordNote(note, 5)

        const chord = [note, thirdNote, fifthNote]

        return chord
    })

    return chordArray;
}

Tone.Transport.bpm.value = 150

const IChord = constructMajorChord(AMinorScale, 4, 'A3');
const VChord = constructMajorChord(AMinorScale, 4, 'E4');
const VIChord = constructMajorChord(AMinorScale, 3, 'F3');
const IVChord = constructMajorChord(AMinorScale, 3, 'D3');

IChord.push('A2', 'G4')
VChord.push('E2', 'G3')
VIChord.push('F2', 'E4')
IVChord.push('D2', 'C4')

console.log(IChord);
console.log(VChord);
console.log(VIChord);
console.log(IVChord);


const synth = new Tone.PolySynth(Tone.Synth, {
    volume: -5,
    oscillator: {
        type: "sawtooth"
    }
}).toDestination();

const mainChords = [
    { 'time': 0, 'note': IChord, 'duration': '2n.' },
    { 'time': '0:3', 'note': VChord, 'duration': '4n' },
    { 'time': '1:0', 'note': VIChord, 'duration': '2n.' },
    { 'time': '1:3', 'note': VChord, 'duration': '4n' },
    { 'time': '2:0', 'note': IVChord, 'duration': '2n.' },
    { 'time': '2:3', 'note': VChord, 'duration': '4n' },
    { 'time': '3:0', 'note': VIChord, 'duration': '2n' },
    { 'time': '3:2', 'note': VChord, 'duration': '4n' },
    { 'time': '3:3', 'note': IVChord, 'duration': '4n' },
    { 'time': '4:0', 'note': IChord, 'duration': '2n.' },
    { 'time': '4:3', 'note': VChord, 'duration': '4n' },
    { 'time': '5:0', 'note': VIChord, 'duration': '2n.' },
    { 'time': '5:3', 'note': VChord, 'duration': '4n' },
    { 'time': '6:0', 'note': IVChord, 'duration': '2n.' },
    { 'time': '6:3', 'note': VChord, 'duration': '4n' },
    { 'time': '7:0', 'note': VIChord, 'duration': '2n' },
    { 'time': '7:2', 'note': VChord, 'duration': '4n' },
    { 'time': '7:3', 'note': IVChord, 'duration': '4n' },
];

const part = new Tone.Part(function (time, note) {
    synth.triggerAttackRelease(note.note, note.duration, time);
}, mainChords).start(0);

const IChord1 = constructMajorChord(AMinorScale, 5, 'A4');
const VChord1 = constructMajorChord(AMinorScale, 5, 'E5');
const VIChord1 = constructMajorChord(AMinorScale, 4, 'F4');
const IVChord1 = constructMajorChord(AMinorScale, 4, 'D4');

IChord.push('A3', 'G5')
VChord.push('E3', 'D5')
VIChord.push('F3', 'E5')
IVChord.push('D3', 'C5')


const mainChordPart = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
        count: 6,
        spread: 80,
        type: "fatsawtooth"
    }
}).toDestination();

const highOctaveChords = [
    { 'time': 0, 'note': IChord1, 'duration': '2n.' },
    { 'time': '0:3', 'note': VChord1, 'duration': '4n' },
    { 'time': '1:0', 'note': VIChord1, 'duration': '2n.' },
    { 'time': '1:3', 'note': VChord1, 'duration': '4n' },
    { 'time': '2:0', 'note': IVChord1, 'duration': '2n.' },
    { 'time': '2:3', 'note': VChord1, 'duration': '4n' },
    { 'time': '3:0', 'note': VIChord1, 'duration': '2n' },
    { 'time': '3:2', 'note': VChord1, 'duration': '4n' },
    { 'time': '3:3', 'note': IVChord1, 'duration': '4n' },
    { 'time': '4:0', 'note': IChord1, 'duration': '2n.' },
    { 'time': '4:3', 'note': VChord1, 'duration': '4n' },
    { 'time': '5:0', 'note': VIChord1, 'duration': '2n.' },
    { 'time': '5:3', 'note': VChord1, 'duration': '4n' },
    { 'time': '6:0', 'note': IVChord1, 'duration': '2n.' },
    { 'time': '6:3', 'note': VChord1, 'duration': '4n' },
    { 'time': '7:0', 'note': VIChord1, 'duration': '2n' },
    { 'time': '7:2', 'note': VChord1, 'duration': '4n' },
    { 'time': '7:3', 'note': IVChord1, 'duration': '4n' },
];

const highSynth = new Tone.PolySynth(Tone.Synth, {
    volume: -16,
    count: 6,
    spread: 80,
    oscillator: {
        type: "fatsawtooth"
    }
}).toDestination();

const highOctaveChordPart = new Tone.Part(function (time, note) {
    highSynth.triggerAttackRelease(note.note, note.duration, time, 0.5);
}, highOctaveChords).start(0);


const mainMelody = [
    { 'time': 0, 'note': 'G4', 'duration': '8n' },
    { 'time': '0:0:2', 'note': 'F4', 'duration': '8n' },
    { 'time': '0:1', 'note': 'D4', 'duration': '8n.' },
    { 'time': '0:2', 'note': 'D4', 'duration': '8n' },
    { 'time': '0:2:2', 'note': 'F4', 'duration': '8n.' },
    { 'time': '0:3', 'note': 'G4', 'duration': '8n' },
    { 'time': '0:3:2', 'note': 'A4', 'duration': '2n' },
    { 'time': '2:0', 'note': 'A4', 'duration': '8n' },
    { 'time': '2:0:2', 'note': 'G4', 'duration': '8n' },
    { 'time': '2:1', 'note': 'F4', 'duration': '8n' },
    { 'time': '2:2', 'note': 'A4', 'duration': '8n' },
    { 'time': '2:2:2', 'note': 'G4', 'duration': '8n' },
    { 'time': '2:3', 'note': 'E4', 'duration': '8n' },
    { 'time': '2:3:2', 'note': 'F4', 'duration': '2n' },
    { 'time': '4:0', 'note': 'G4', 'duration': '8n' },
    { 'time': '4:0:2', 'note': 'F4', 'duration': '8n' },
    { 'time': '4:1', 'note': 'D4', 'duration': '8n' },
    { 'time': '4:2', 'note': 'F4', 'duration': '8n' },
    { 'time': '4:2:2', 'note': 'A4', 'duration': '8n' },
    { 'time': '4:3', 'note': 'G4', 'duration': '8n' },
    { 'time': '4:3:2', 'note': 'A4', 'duration': '2n' },
    { 'time': '5:2:2', 'note': 'G4', 'duration': '8n' },
    { 'time': '5:3', 'note': 'A4', 'duration': '8n' },
    { 'time': '5:3:2', 'note': 'B4', 'duration': '8n' },
    { 'time': '6:0', 'note': 'C5', 'duration': '8n' },
    { 'time': '6:1', 'note': 'B4', 'duration': '8n' },
    { 'time': '6:1:2', 'note': 'A4', 'duration': '8n' },
    { 'time': '6:2', 'note': 'B4', 'duration': '8n' },
    { 'time': '6:2:2', 'note': 'A4', 'duration': '8n' },
    { 'time': '6:3', 'note': 'G4', 'duration': '8n' },
    { 'time': '6:3:2', 'note': 'A4', 'duration': '1n' },
];

const synth2 = new Tone.Synth({
    oscillator: {
        volume: 5,
        count: 3,
        spread: 40,
        type: "fatsawtooth"
    }
}).toDestination();

const mainMelodyPart = new Tone.Part(function (time, note) {
    synth2.triggerAttackRelease(note.note, note.duration, time);
}, mainMelody).start(0);


const lowPass = new Tone.Filter({
    frequency: 8000,
}).toDestination();

const snareDrum = new Tone.NoiseSynth({
    noise: {
        type: 'white',
        playbackRate: 3,
    },
    envelope: {
        attack: 0.001,
        decay: 0.20,
        sustain: 0.15,
        release: 0.03,
    },
}).connect(lowPass);

const snares = [
    { time: '0:2' },
    { time: '1:2' },
    { time: '2:2' },
    { time: '3:2' },
    { time: '4:2' },
    { time: '5:2' },
    { time: '6:2' },
    { time: '7:2' },
]

const snarePart = new Tone.Part(function (time) {
    snareDrum.triggerAttackRelease('4n', time)
}, snares).start(0);


const kickDrum = new Tone.MembraneSynth({
    volume: 6
}).toDestination();

const kicks = [
    { time: '0:0' },
    { time: '0:3:2' },
    { time: '1:1' },
    { time: '2:0' },
    { time: '2:1:2' },
    { time: '2:3:2' },
    { time: '3:0:2' },
    { time: '3:1:' },
    { time: '4:0' },
    { time: '4:3:2' },
    { time: '5:1' },
    { time: '6:0' },
    { time: '6:1:2' },
    { time: '6:3:2' },
    { time: '7:0:2' },
    { time: '7:1:' },
];

const kickPart = new Tone.Part(function (time) {
    kickDrum.triggerAttackRelease('C1', '8n', time)
}, kicks).start(0);


const bassline = [
    { 'time': 0, 'note': 'A0', 'duration': '2n' },
    { 'time': '0:3', 'note': 'F0', 'duration': '2n.' },
    { 'time': '1:3', 'note': 'D0', 'duration': '2n.' },
    { 'time': '2:3', 'note': 'F0', 'duration': '1:1' },
];

const bass = new Tone.Synth({
    oscillator: {
        type: "triangle"
    }
}).toDestination();

const bassPart = new Tone.Part(function (time, note) {
    bass.triggerAttackRelease(note.note, note.duration, time);
}, bassline).start(0);

const noise = new Tone.Noise("pink").start();

const autoFilter = new Tone.AutoFilter({
    volume: -10,
    frequency: "4n",
    baseFrequency: 40,
    octaves: 4
}).toDestination();

noise.connect(autoFilter);

/**
 * Sonic generator creates algorithmic sound using realtime data from Twitter
 */
class SonicGenerator {

    constructor() {

    }

    start() {
        Tone.Transport.start();
        autoFilter.start();
    }

    stop() {
        Tone.Transport.stop();
        autoFilter.stop();
    }

    receive(words) {
        if (words.includes("yes")) {
            let player = new Tone.Player({
                url: "https://tonejs.github.io/audio/drum-samples/loops/ominous.mp3",
                autostart: true,
            });
            let filter = new Tone.Filter(400, 'lowpass').toDestination();
            let feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();

            // connect the player to the feedback delay and filter in parallel
            player.connect(filter);
            player.connect(feedbackDelay);
        }
        if (words.includes("no")) {
            let player = new Tone.Player({
                url: "https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3",
                loop: true,
                autostart: true,
            })
            //create a distortion effect
            let distortion = new Tone.Distortion(0.4).toDestination();
            //connect a player to the distortion
            player.connect(distortion);
        }
    }
}


let SG = new SonicGenerator();
const controls = new dat.GUI();

var volume = { volume: 0.5 };
controls.add(volume, 'volume', 0, 5);

var filter = { frequency: 8000 };
controls.add(filter, 'frequency', 0, 8000);

var modulation = { modulation: 1 };
controls.add(modulation, 'modulation', 0, 10);

function App() {
    const [playing, setPlaying] = useState(false);
    const [lastMessage, setLastMessage] = useState('Hit enter to send');
    const [log, setLog] = useState([]);

    let pushToConsole = (message) => {
        var d = new Date();
        var n = d.toLocaleTimeString();
        setLog(log.concat(n + " " + message));
        console.log(log);
    }

    let handleStart = async () => {
        await Tone.start();
        SG.start();
        setPlaying(true);
        pushToConsole('Sonic Generator started');
    };

    let handleStop = async () => {
        await Tone.start();
        setPlaying(false);
        SG.stop();
        pushToConsole('Sonic Generator stopped');
    };

    let testInputonKeyDown = async (event) => {
        await Tone.start();
        if (event.key === 'Enter') {
            pushToConsole('Received ' + event.target.value);
            let words = event.target.value.split(' ');

            SG.receive(words);
            event.target.value = '';
        }
    }

    return (

        <div className="App">
            <div className="Console">
                {log.map((message, index) => { return <p key={index}>{message}</p> })}
            </div>
            <div className="Main">
                <div className="Empty"></div>
                <div className="Content">
                    <div className="Title">Together with Touch - Bangalore 2021</div>
                    <div className="Controls">
                        <input type="button" className="Button" href="#" onClick={handleStart} disabled={playing} value="Start" />
                        <input type="button" className="Button" onClick={handleStop} disabled={!playing} value="Stop" />
                    </div>
                </div>
                <div className="TestInput">
                    <input type="text" onKeyDown={testInputonKeyDown} placeholder="Type something..." />
                    <p>{lastMessage}</p>
                </div>
                <div className="Footer">
                    <p>A project at <a href="https://publicdomain.garden">publicdomain.garden</a></p>
                    <p><a href="https://www.instagram.com/lenaheubusch/">Lena Heubusch</a> x <a href="https://www.instagram.com/thestormfactory/">Avril Stormy Unger</a> x <a href="#">Nikhil Nagaraj</a> x <a href="https://www.instagram.com/mathscapes/">Mathscapes</a> | Supported by <a href="https://www.instagram.com/goetheinstitutbangalore/">Goethe Institute</a>, <a href="https://www.instagram.com/walkinstudios/">Walkin Studios</a></p>
                </div>
            </div>

        </div>
    );
}

export default App;
