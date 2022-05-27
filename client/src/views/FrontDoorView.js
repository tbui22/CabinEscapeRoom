import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../CSS/FrontDoorView.css';
import { Howl, Howler } from 'howler';
import KeyLock from "../files/keyLock.wav";
import Tada from "../files/tada.wav";
import KeySound from "../files/keySound.aiff";

const FrontDoorView = (props) => {
    const {addMessage, solvedLights, name, minute, second, counter, finalKeyVisible, cabinetKeyVisible} = props
    const history = useHistory()
    const { Howl, Howler } = require('howler');
    
    
    const onClickRightHandler = (e) => {
        history.push("/bookshelf")
    }

    const onClickLeftHandler = (e) => {
        history.push("/lights")
    }

    const clickLock = (e) => {
        console.log(counter)
        if(!finalKeyVisible){
            axios.post('http://localhost:8000/api/user', {name: `${name}`, timeTaken: `${minute} minutes ${second} seconds`, seconds: counter})
            .then(res => console.log(res))
            .catch(err => console.log(err))
            history.push('/success');
            let effect = new Howl({
                src: [KeyLock],
                volume: 2
            });
            effect.play();
            effect = new Howl({
                src: [Tada],
                volume: 5
            });
            effect.play();

        }else if(!cabinetKeyVisible){
            addMessage("The key doesn't fit!")
        }else addMessage("The door is locked, you need a key.")
        
    }


    const keySound = () => {
        let effect = new Howl({
            src: [KeySound],
            volume: 5
        });
        effect.play();
    };

    return(
        <div className="gameWindow position-relative">  
            <img className="gameBackground" src={require(solvedLights ? '../img/DoorWithOpenCabinet.png' : '../img/DoorWithClosedCabinet.png')} alt="Front Door"/>
            <img className="arrow position-absolute top-50 start-0 translate-middle-y clickable" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
            <img className="arrow position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler}/>
            <img className="rug position-absolute bottom-0 start-50 translate-middle-x" src={require('../img/rug.png')} alt="rug" />
            <img className="lock position-absolute top-0 start-0 translate-middle-y clickable" src={require("../img/lock.png")} alt="lock" onClick={clickLock}/>

            {props.solvedLights && props.cabinetKeyVisible ?
                <img className="key position-absolute top-50 end-0 translate-middle-y clickable" src={require("../img/key.png")} alt="key" onClick={() => {props.onClickKeyHandler(); keySound();}}/> 
                : null
            }

        </div>
    )
}

export default FrontDoorView;