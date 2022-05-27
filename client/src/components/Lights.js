import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import OnSwitch from "../img/OnSwitch.png";
import OffSwitch from "../img/OffSwitch.png";
import { Howl, Howler } from 'howler';
import SwitchSound from '../files/lightSwitch.wav';
import OpenDresser from '../files/openingDresser.wav';
import '../CSS/LightsView.css';


const Lights = (props) => {
    const [light1, setLight1] = useState(false);
    const [light2, setLight2] = useState(false);
    const [light3, setLight3] = useState(false);
    const [light4, setLight4] = useState(false);
    const [inOrderLights, setinOrderLights] = useState(false);
    const { Howl, Howler } = require('howler');


    const correctCode = [true, true, true, false];

    useEffect(() => {
        console.log("paintings in order" + props.inOrder);
        const lights = [light1, light2, light3, light4];
        for(let i = 0; i < lights.length; i++){
            if (lights[i] !== correctCode[i]){
                console.log("incorrect")
                props.addMessage("Hmmm. The light switches do not look to be in the right order.");
                return
            }
        };

        setinOrderLights(true);

        if(props.inOrder && inOrderLights){
            props.SolvedPuzzleLights(true);
            let effect = new Howl({
                src: [OpenDresser],
            });
            effect.play();
            props.addMessage("You heard something open! Take a look around to see what it was.");
            return
        };

        props.addMessage("Hmmm something seems off.");
        return;
    },[light1, light2, light3, light4, inOrderLights])
    

    const lightSound= () => {
        let effect = new Howl({
            src: [SwitchSound],
        });
        effect.play();
    };

    return(
        <div>
            <motion.div>
                <img className="lightsCloseUp" src={require('../img/LightsCloseUp.png')} alt="background"/>
                <img className="light1" src={light1 ? OnSwitch : OffSwitch} alt='light switch' onClick={()=> {setLight1(!light1); lightSound(); }}/>
                
                <img className="light2" src={light2 ? OnSwitch : OffSwitch} alt='light switch' onClick={()=> {setLight2(!light2); lightSound();}}/>
                
                <img className='light3' src={light3 ? OnSwitch : OffSwitch} alt='light switch' onClick={()=> {setLight3(!light3); lightSound();}}/>
                
                <img className="light4" src={light4 ? OnSwitch : OffSwitch} alt='light switch' onClick={()=> {setLight4(!light4); lightSound();}}/>

                <AnimatePresence>
                    {props.isVisible && (
                        <motion.div
                            initial={{opacity:0, scale:0.75}}
                            animate={{opacity:1, scale:30}}
                            exit={{opcaity:0, scale:0}}
                        >
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default Lights;