import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styles from "./Home.module.css"
import { Howl, Howler } from 'howler';
import DoorSound from "../files/doorClosing.wav";



const cabinPic = require("../img/cabinPic.jpg")


const Home = (props) => {

    const history = useHistory();
    const { Howl, Howler } = require('howler');


    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.setSubmitted(true);
        props.showSidebar(true);
        history.push("/door");

        let effect = new Howl({
            src: [DoorSound],
        });
        effect.play();
    };

    const onChangeHandler = (e) => {
        props.changeName(e.target.value)
    };

    useEffect(() => {
        props.setSubmitted(false)
    }, []);

    useEffect(() => {
        props.showSidebar(false)
    }, []);

    useEffect(() => {
        props.changeName("")
    }, []);


    return (

        <div className={styles.nameForm}>
            <form className="greenbox" onSubmit={onSubmitHandler}>
                <p>You are on your way to the annual family trip to the mountain in the woods. Nightfalls and a thunderstorm prevents you from continuing the long drive to your destination. You take a wrong turn due low visiblity and the hazardous weather conditions. As you continue slowly driving on the unpaved roads, you become more and more lost and lose hope until...  you stumble across a cabin that looks very much abandoned from the outside. You contemplate on whether or not to take shelter there for the night as you await the ending of the storm.</p>
                <div style={{ textAlign: "center" }}>
                    <label>Enter your name if you decide to stay:</label><br />
                    <input type="text" name='name' onChange={onChangeHandler} value={props.name} />
                    <br />
                    <input type="submit" className='btn btn-success btn-sm m-3' />
                </div>
            </form>
        </div>

    )
}

export default Home