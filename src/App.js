/**
 * Together with Touch - Bangalore 2021
 */

import './App.css';
import * as Tone from 'tone';
import React, { useState } from 'react';
import * as dat from 'dat.gui';


const gui = new dat.GUI();

var basicPanel = gui.addFolder('Basic (Experimental)');
var basic = { volume: 0.5, bpm: 80 };
basicPanel.add(basic, 'volume', 0, 1);

basicPanel.add(basic, 'bpm', 40, 200)
    .onFinishChange(() => {
        Tone.Transport.bpm.rampTo(basic.bpm, 10);
    });

var signalPanel = gui.addFolder('Signal (Experimental)');
var signal = { modulation: 0.5, harmonicity: 0.3 };
signalPanel.add(signal, 'modulation', 0, 1);
signalPanel.add(signal, 'harmonicity', 0, 1);

const notes = ["C", "D", "E", "F", "G", "A", "B"];
const octaves = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const sharps = ["", "b"];

const chords = [
    ['A4', 'Cb4', 'E4'],
    ['A4', 'C4', 'E4'],
    ['C4', 'E4', 'G4'],
    ['C4', 'Eb4', 'G4'],
    ['D4', 'Fb4', 'A4'],
    ['D4', 'F4', 'A4'],
    ['E4', 'Gb4', 'B4'],
    ['E4', 'G4', 'B4'],
    ['F4', 'A4', 'C4'],
    ['F4', 'Ab4', 'C4'],
    ['G4', 'B4', 'D4'],
    ['G4', 'Bb4', 'D4']
];

function getRandomNote() {
    let note = notes[Math.floor(Math.random() * notes.length)];
    let octave = octaves[Math.floor(Math.random() * octaves.length)];
    let sharp = sharps[Math.floor(Math.random() * sharps.length)];
    return note + sharp + octave;
}

function getRandomChord() {
    return chords[Math.floor(Math.random() * chords.length)];
}

/**
 * Sonic generator creates algorithmic sound using realtime data from Twitter
 */
class SonicGenerator {

    constructor() {
        this.noise = new Tone.Noise({
            type: "white",
            volume: -10
        });
        this.autoFilter = new Tone.AutoFilter({
            frequency: "4n",
            baseFrequency: 50,
            octaves: 2
        }).toDestination();
        this.noise.connect(this.autoFilter);

        this.synthA = new Tone.AMSynth({
            harmonicity: signal.harmonicity,
            modulationIndex: signal.modulation,
            volume: -10
        }).toDestination();
        this.synthB = new Tone.FMSynth({
            harmonicity: signal.harmonicity,
            modulationIndex: signal.modulation,
            volume: -20
        }).toDestination();

        this.loopA = new Tone.Loop(time => {
            this.synthA.triggerAttackRelease("C1", "8n", time);
        }, "4n").start(0);

        this.loopB = new Tone.Loop(time => {
            this.synthB.triggerAttackRelease("C2", "8n", time);
        }, "4n").start("8n");


        this.synth = new Tone.PolySynth().toDestination();

    }

    start() {
        Tone.Transport.start();
        this.autoFilter.start();
        this.noise.start();
    }

    stop() {
        Tone.Transport.stop();
        this.autoFilter.stop();
        this.noise.stop();
    }

    receive() {
        this.chordEvent = new Tone.ToneEvent(((time, chord) => {
            this.synth.triggerAttackRelease(chord, Math.random() * 1.5, time);
        }), getRandomChord());

        this.chordEvent.start();
        this.chordEvent.loop = Math.floor(Math.random() * 8);
        this.chordEvent.loopEnd = "1m";
    }
}

function App() {
    const [playing, setPlaying] = useState(false);
    const [lastMessage, setLastMessage] = useState('Hit enter to send');
    const [log, setLog] = useState([]);

    let SG = new SonicGenerator();

    let pushToConsole = (message) => {
        setLog(log.concat(message));
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
            // setLastMessage('Received ' + event.target.value);
            pushToConsole('Received ' + event.target.value);
            let words = event.target.value.split(' ');

            SG.receive();
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
