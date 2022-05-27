import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import '../CSS/PaintingView.css';
import { Reorder } from "framer-motion";
import { Item } from "../components/Item";
import { Howl, Howler } from 'howler';
import Painting from '../files/pictures.wav'

const PaintingView = (props) => {

    const { pictures, solvedPuzzle1, correctOrder, changePics, addMessage } = props
    const [items, setItems] = useState(pictures)
    const [correctItems, setCorrectItems] = useState(correctOrder)
    const didRender = useRef(false);
    const history = useHistory();


    const { Howl, Howler } = require('howler');
    useEffect(() => {
        if (didRender.current) { sound() }
        else didRender.current = true
    }, [items])

    const sound = () => {
        let effect = new Howl({
            src: [Painting],
            volume: 20,
        });
        effect.play();
    }


    useEffect(() => {
        setItems(pictures)
        setCorrectItems(correctOrder)
    }, [props]);



    useEffect(() => {
        if (items) {

            for (let i = 0; i < items.length; i++) {

                if (items[i] !== correctItems[i]) {
                    // console.log("incorrect")
                    props.setInOrder(false)
                    return
                }
            }
            console.log("correct")
            // addMessage("The paintings seem to be in the correct order")
            props.setInOrder(true);

            // make paintings unmovable?
            // you can make a ternary to set the items as unclickable??
            return
        }
    }, [items]);

    const onClickRightHandler = (e) => {
        history.push("/lights");
    };

    const onClickLeftHandler = (e) => {
        history.push("/bookshelf");
    };

    const onClickTable = (e) => {
        addMessage("Hmm. Seems like an ordinary table. You lift up the table cloth, but find nothing.");
    };

    const onClickBoxes = (e) => {
        addMessage("These boxes have an oddly sweet smelling aroma. You look through the boxes, but you find nothing but dried flower petals.");
    };


    return (
        <div className="gameWindow position-relative">
            <img className="gameBackground" src={require('../img/Wall.jpg')} alt="Wall" />

            <img className="clothTable position-absolute top-50 start-50 translate-middle clickable" src={require('../img/table.png')} alt='chest' onClick={onClickTable} />
            <img className="boxes position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/boxes.png')} alt='boxes' onClick={onClickBoxes} />
            <img className="arrow position-absolute top-50 start-0 translate-middle-y clickable" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
            <img className="arrow position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler} />
            <img className="rug position-absolute bottom-0 start-50 translate-middle-x" src={require('../img/rug.png')} alt="rug" />

            <div className='pushList position-absolute top-0'>
                <Reorder.Group axis="x" onReorder={changePics} values={items}>
                    <div className='paintings '>
                        {items.map((item) => (
                            <Item key={item} item={item} ></Item>
                        ))}
                    </div>
                </Reorder.Group>
            </div>

        </div>
    )
}

export default PaintingView;