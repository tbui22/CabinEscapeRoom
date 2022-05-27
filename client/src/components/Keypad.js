import React, { useState, useEffect } from 'react';

import '../CSS/LightsView.css';

const keypadImage = require('../img/KeyPadCloseUp.png');
const Keypad = (props) => {

    const [width, setWidth] = useState(window.screen.width)
    const [code, setCode] = useState("")

    const handleOnClick1 = (e) => {
        e.preventDefault()
        console.log("you clicked me")
        if (code.length < 4) {

            setCode(code + "1")
        }
    };

    const handleOnClick2 = (e) => {
        e.preventDefault()
        console.log("you clicked me")
        if (code.length < 4) {

            setCode(code + "2")
        }
    };

    const handleOnClick3 = (e) => {
        e.preventDefault()
        console.log("you clicked me")
        if (code.length < 4) {

            setCode(code + "3")
        }
    };

    const handleOnClick4 = (e) => {
        e.preventDefault()
        console.log("you clicked me")
        if (code.length < 4) {

            setCode(code + "4")
        }
    };

    const handleOnClick5 = (e) => {
        e.preventDefault()
        console.log("you clicked me")
        if (code.length < 4) {

            setCode(code + "5")
        }
    };

    const handleOnClick6 = (e) => {
        e.preventDefault()
        console.log("you clicked me")
        if (code.length < 4) {

            setCode(code + "6")
        }
    };

    const handleOnClick7 = (e) => {
        e.preventDefault()
        console.log("you clicked me")
        if (code.length < 4) {

            setCode(code + "7")
        }
    };

    const handleOnClick8 = (e) => {
        e.preventDefault()
        console.log("you clicked me")
        if (code.length < 4) {

            setCode(code + "8")
        }
    };

    const handleOnClick9 = (e) => {
        e.preventDefault()
        console.log("you clicked me")
        if (code.length < 4) {

            setCode(code + "9")
        }
    };

    const handleOnClickDelete = (e) => {
        e.preventDefault()
        console.log("you clicked me")
        if (code.length <= 4) {

            setCode(code.slice(0, -1))
        }
    };

    const handleOnClick0 = (e) => {
        e.preventDefault()
        console.log("you clicked me")
        if (code.length < 4) {

            setCode(code + "0")
        }
    };

    const handleOnClickEnter = (e) => {
        e.preventDefault()
        console.log(code)
        if (code === "2362") {
            props.openSafe(true)
            props.addMessage("You opened the safe!")
        } else {
            props.addMessage("The safe won't open...")
        }
    };

    return (
        <>
            <div className="keypad">
                <img className="keypadimg" src={keypadImage} alt="background" useMap='#workmap' id='keyp' />
                {/* <map id = "workmap" name="workmap">
                <area shape="rect" coords="48 210 180 280" alt="test" href={keypadImage} onClick={handleOnClick1}/>
                <area shape="rect" coords="200 205 320 287" alt="test" href={keypadImage} onClick={handleOnClick2}/>
                <area shape="rect" coords="347 205 458 287" alt="test" href={keypadImage} onClick={handleOnClick3}/>
                <area shape="rect" coords="59 326 174 400" alt="test" href={keypadImage} onClick={handleOnClick4}/>
                <area shape="rect" coords="208 326 318 400" alt="test" href={keypadImage} onClick={handleOnClick5}/>
                <area shape="rect" coords="347 326 458 400" alt="test" href={keypadImage} onClick={handleOnClick6}/>
                <area shape="rect" coords="60 444 180 518" alt="test" href={keypadImage} onClick={handleOnClick7}/>
                <area shape="rect" coords="200 444 320 518" alt="test" href={keypadImage} onClick={handleOnClick8}/>
                <area shape="rect" coords="347 444 458 518" alt="test" href={keypadImage} onClick={handleOnClick9}/>
                <area shape="rect" coords="48 560 180 634" alt="test" href={keypadImage} onClick={handleOnClickDelete}/>
                <area shape="rect" coords="200 560 320 634" alt="test" href={keypadImage} onClick={handleOnClick0}/>
                <area shape="rect" coords="347 560 458 634" alt="test" href={keypadImage} onClick={handleOnClickEnter}/>
            </map>
             */}

                <div onSubmit={handleOnClickEnter} className="form ">
                    <div className='codeInput' >{code}</div>
                    <div className=   "abc clickable"clickable onClick={handleOnClick1}></div>
                    <div className=  "def clickable" onClick={handleOnClick2}></div>
                    <div className=  "ghi clickable" onClick={handleOnClick3}></div>
                    <div className=  "jkl clickable" onClick={handleOnClick4}></div>
                    <div className=  "mno clickable" onClick={handleOnClick5}></div>
                    <div className=  "pqr clickable" onClick={handleOnClick6}></div>
                    <div className=  "stu clickable" onClick={handleOnClick7}></div>
                    <div className=  "vwx clickable" onClick={handleOnClick8}></div>
                    <div className=  "yz clickable" onClick={handleOnClick9}></div>
                    <div className=  "delete clickable" onClick={handleOnClickDelete}></div>
                    <div className=  "zero clickable" onClick={handleOnClick0}></div>
                    <div className=  "enter clickable" onClick={handleOnClickEnter}></div>
                </div>
            </div>
        </>
    );
}

export default Keypad;
