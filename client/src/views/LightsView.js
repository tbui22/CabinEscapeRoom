import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../CSS/LightsView.css';
import Lights from '../components/Lights';
import Riddle from '../components/Riddle';
import Keypad from '../components/Keypad';
import { motion, AnimatePresence } from "framer-motion";
import { Howl, Howler } from 'howler';
import safeSound from "../files/safeOpening.wav";
import drawerSound from "../files/drawerOpening.wav";
import KeySound from "../files/keySound.aiff";



const LightsView = (props) => {

    const [isLightsVisible, setLightsVisible] = useState(false);
    const [isRiddleVisible, setIsRiddleVisible] = useState(false);
    const [isKeyPadVisible, setIsKeyPadVisible] = useState(false);
    const history = useHistory();
    const [code, setCode] = useState("")
    const [safeOpen, setSafeOpen] = useState(false)
    const { Howl, Howler } = require('howler');



    const onClickRightHandler = (e) => {
        history.push("/door")
    };

    const onClickLeftHandler = (e) => {
        history.push("/paintings")
    };

    const onClickSafe = (e) => {
        console.log("you clicked safe!");
        // history.push("/keypad")
        setIsKeyPadVisible(true);
    };

    const reset = (e) => {
        setLightsVisible(false);
        setIsRiddleVisible(false);
        setIsKeyPadVisible(false);
    };

    const safeIsOpen = (tf) => {
        setSafeOpen(tf)
        let effect = new Howl({
            src: [safeSound],
        });
        effect.play();
    };

    const onClickCabinet = (e) => {
        if (props.cabinetKeyVisible === false) {
            setIsRiddleVisible(true);

            let effect = new Howl({
                src: [drawerSound],
                volume: 5,
            });
            effect.play();
            props.addMessage("The key opened the drawer! You found a note inside.")
        } else {
            props.addMessage("All the drawers are locked. It looks like you need a key to open it.")
        }
    };


    const onClickMirror = (e) => {
        props.addMessage("This looks like it has been here for decades. The hindges look ready to break off. Better not touch this before you break it.")
    };


    const keySound = () => {
        let effect = new Howl({
            src: [KeySound],
            volume: 10
        });
        effect.play();
    };

    return (
        <div className="gameWindow position-relative">
            <img className="gameBackground" src={require('../img/Wall.jpg')} alt="Lights Wall" onClick={reset} />

            <img className="safe position-absolute top-50 end-0 translate-middle-y clickable" onClick={onClickSafe} src={require(safeOpen ? '../img/safeOpen.png' : '../img/safe1.png')} alt='Safe Open' />
            <img className="mirror position-absolute top-0 start-0 translate-middle clickable" onClick={onClickMirror} src={require('../img/mirror.png')} alt='Mirror' />
            <img className="rug position-absolute bottom-0 start-50 translate-middle-x" src={require('../img/rug.png')} alt="rug" />
            <img className="drawer1 position-absolute top-50 start-50 translate-middle clickable" src={require('../img/drawer1.png')} alt="drawer" onClick={onClickCabinet} />
            <img className="arrow position-absolute top-50 start-0 translate-middle-y clickable" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
            <img className="arrow position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler} />


            <motion.div className='lights position-absolute top-0 end-0 translate-middle-y clickable' onClick={() => setLightsVisible(true)}>
                <AnimatePresence>
                    {isLightsVisible && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.75 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                        >
                            <Lights inOrder={props.inOrder} addMessage={props.addMessage} SolvedPuzzleLights={props.SolvedPuzzleLights} text={props.text} />
                        </motion.div>
                    )}

                </AnimatePresence>
            </motion.div>

            {isRiddleVisible ? <Riddle /> : null}

            {isKeyPadVisible ? <Keypad addMessage={props.addMessage} openSafe={safeIsOpen} /> : null}

            {safeOpen && props.finalKeyVisible ?
                <img className="finalKey position-absolute top-50 end-0 translate-middle-y clickable" src={require("../img/FinalKey.png")} alt="key" onClick={() => { props.grabFinalKey(); keySound() }} /> : null
            }
        </div>
    )
}

export default LightsView;