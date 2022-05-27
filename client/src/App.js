import logo from './logo.svg';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';
import Home from './views/Home';
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  useHistory,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import FrontDoorView from './views/FrontDoorView';
import BookshelfView from './views/BookshelfView';
import PaintingView from './views/PaintingView';
import LightsView from './views/LightsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import Success from './views/Success';
import Cheater from './views/Cheater';
import BestTimes from './views/BestTimes';
import Keypad from './components/Keypad';

import Triller from './files/Triller.m4a';
import { Howl, Howler } from 'howler';
import AudioButton from './components/AudioButton';


const Beach = require("./img/ArrFrameBeach.png")
const Flower = require("./img/ArrFrameFlower.png")
const Moon = require("./img/ArrFrameMoon.png")
const Mountain = require("./img/ArrFrameMountain.png")




function App() {
  // Dependancies

  const [name, setName] = useState(localStorage.getItem('name'));
  const [submitted, setSubmitted] = useState(localStorage.getItem('submitted'));
  const [pictures, setPictures] = useState([Beach, Flower, Moon, Mountain]);
  const [correctOrder, setOrder] = useState([Mountain, Flower, Beach, Moon]);
  const [inOrder, setInOrder] = useState(false);
  // const [hasKey, setHasKey] = useState(false);



  const [solvedLights, setSolvedLights] = useState(false);
  const [cabinetKeyVisible, setCabinetKeyVisible] = useState(true);
  const [finalKeyVisible, setFinalKeyVisible] = useState(true);


  // Sidebar
  const [sidebar, setSidebar] = useState(localStorage.getItem('sidebar'));
  const [text, setMessages] = useState(["As you enter the cabin, the door locks behind you with a load thud. You are trapped... This place gives you the creeps. Let's try to find a way out."]);

  const showSidebar = (tf) => {
    setSidebar(tf);
    localStorage.setItem('sidebar', tf)
  };

  const changeName = (n) => {
    setName(n)
  };

  const addMessage = (m) => {
    setMessages([...text, m])
  };

  // Timer and Hint Column
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [counter, setCounter] = useState(0);
  const [hint, setHint] = useState("The bookshelf has many items, see if there is anything useful there.");


  useEffect(() => {
    let intervalId;
    if (submitted) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;
        setSecond(computedSecond);
        setMinute(computedMinute);
        setCounter(counter => counter + 1);
      }, 1000)
    }
    return () => clearInterval(intervalId);
  }, [submitted, counter]);

  // Audio
  const { Howl, Howler } = require('howler');
  const [sound, setSound] = useState(false);
  Howler.volume(0.25);

  const [audioIcon, setAudioIcon] = useState(require('./img/mute.png'))
  const onClickAudio = (e) => {
    console.log(sound)
    if (sound) {

      setAudioIcon(require('./img/mute.png'));
      sound.stop();
      sound.unload();
      setSound(null);
    } else {
      setAudioIcon(require('./img/sound.png'));

      let newsound = new Howl({
        src: [Triller],
        loop: true,
      });
      setSound(newsound)
      newsound.play();
    }
  };

  // Misc Methods
  const grabFinalKey = () => {
    setFinalKeyVisible(false);
    // setHasKey(true);
  };

  const changeSubmitted = (tf) => {
    setSubmitted(tf)
  };

  const changePics = (values) => {
    setPictures(values)
  };

  const isInOrder = (tf) => {
    setInOrder(tf)
  };

  const SolvedPuzzleLights = (s) => {
    setSolvedLights(s);
  };

  const onClickKeyHandler = (e) => {
    addMessage("You found a key! You added it to your inventory.");
    setCabinetKeyVisible(false);
  };

  useEffect(() => {
    localStorage.setItem('sidebar', sidebar)
  }, [sidebar]);

  useEffect(() => {
    localStorage.setItem('name', name)
  }, [name]);

  useEffect(() => {
    localStorage.setItem('submitted', submitted)
  }, [submitted]);

  useEffect(() => {
    if (inOrder) {
      setHint("What do the arrows on the painting mean?")
    }
    if (solvedLights) {
      setHint("The code to the safe is contained in a riddle.")
    }
  }, [solvedLights, inOrder]);

  return (
    <div>
      <Navbar name={name} submitted={submitted} />

      <Route exact path="/">
        <Home changeName={changeName} name={name} setSubmitted={changeSubmitted} showSidebar={showSidebar} />
      </Route>

      <AudioButton audioIcon={audioIcon} onClickAudio={onClickAudio} />

      <div style={{ display: "flex", justifyContent: 'space-evenly', marginTop: "5%" }}>

        {submitted &&
          <Sidebar sidebar={sidebar} text={text} audioIcon={audioIcon} onClickAudio={onClickAudio} />}

          <Route exact path="/door">
            <FrontDoorView onClickKeyHandler={onClickKeyHandler} cabinetKeyVisible={cabinetKeyVisible} finalKeyVisible={finalKeyVisible} addMessage={addMessage} solvedLights={solvedLights} name={name} minute={minute} second={second} counter={counter} />
          </Route>

          <Route exact path="/lights">
            <LightsView finalKeyVisible={finalKeyVisible} grabFinalKey={grabFinalKey} cabinetKeyVisible={cabinetKeyVisible} inOrder={inOrder} addMessage={addMessage} SolvedPuzzleLights={SolvedPuzzleLights} text={text} solvedLights={solvedLights} sidebar={sidebar} name={name} submitted={submitted} />
          </Route>

          <Route exact path="/keypad">
            <Keypad />
            </Route>

          <Route exact path="/success">
            <Success finalKeyVisible={finalKeyVisible} name={name} second={second} minute={minute} changeSubmitted={changeSubmitted} showSidebar={showSidebar} />
        </Route>

        <Route exact path="/bookshelf">
          <BookshelfView addMessage={addMessage} SolvedPuzzleLights={SolvedPuzzleLights} text={text} solvedLights={solvedLights} sidebar={sidebar} name={name} submitted={submitted} />
        </Route>

        <Route exact path="/paintings">
          <PaintingView pictures={pictures} solvedLights={solvedLights} correctOrder={correctOrder}
            changePics={changePics} setInOrder={isInOrder}
            addMessage={addMessage} />
        </Route>

        {submitted &&
          <div className='card' style={{ width: "18rem", height: "10rem" }}>
            <div className='card-body' style={{ textAlign: "center" }}>
              <h5 className="card-title">Time Spent in Cabin</h5>
              <p className="card-text">{minute}:{second}</p>
              <button className='btn btn-secondary' onClick={() => { addMessage(hint) }}>Get Hint</button>
            </div>
          </div>
        }

      </div>

      <Route exact path="/times" >
        <BestTimes showSidebar={showSidebar} changeSubmitted={changeSubmitted} />
      </Route>

      <Route exact path="/success">
        <Success haskey={finalKeyVisible} name={name} second={second} minute={minute} changeSubmitted={changeSubmitted} showSidebar={showSidebar} />
      </Route>

      <Route exact path="/cheater">
        <Cheater haskey={finalKeyVisible} changeSubmitted={changeSubmitted} />
      </Route>
    </div>

  );
}

export default App;
