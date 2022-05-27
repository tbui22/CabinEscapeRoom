import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Book from '../components/Book';
import '../CSS/BookshelfView.css';
import { motion, AnimatePresence } from "framer-motion";


const BookshelfView = (props) => {

    const history = useHistory();

    const [isLettersVisible, setisLettersVisible] = useState(false);
    const [isBook, setisBook] = useState(true);
    
    const onClickRightHandler = (e) => {
        history.push("/paintings")
    }

    const onClickLeftHandler = (e) => {
        history.push("/door")
    }

    const book= () => {
        setisLettersVisible(true);
        setisBook(false); 
        console.log("you clicked me" + isLettersVisible)
    }

    const reset= () => {
        setisLettersVisible(false);
        setisBook(true); 
    }

    const onClickLamp = (e) => {
        props.addMessage("You very surprised this lamp still functions. Upon closer inspection, nothing seems out of the ordinary with this lamp. ")
    }

    return (
        <div className="gameWindow position-relative" >
            <img className="gameBackground" src={require('../img/BookShelf.png')} alt="BookShelf" onClick={reset}/>
                        
            <img className="lamp position-absolute top-0 start-0 translate-middle" onClick = {onClickLamp} src={require('../img/lamp.png')} alt='Lamp' />
            <img className="arrow position-absolute top-50 start-0 translate-middle-y clickable" src={require('../img/leftArrow.png')} alt='left arrow' onClick={onClickLeftHandler} />
            <img className="arrow position-absolute top-50 end-0 translate-middle-y clickable" src={require('../img/rightArrow.png')} alt='right arrow' onClick={onClickRightHandler} />
            <img className="rug position-absolute bottom-0 start-50 translate-middle-x c" src={require('../img/rug.png')} alt="rug" onClick={() => props.addMessage("You lift up the rug but find nothing. This rug has definitely seen better days and it smells disgusting!")} />
            <img className="armChair position-absolute top-50 start-50 translate-middle clickable" src={require('../img/armchair.png')} alt="Arm Chair" onClick={() => props.addMessage("You are exhausted! This chair looks does look comfy, but better get back to finding a way out!")} />
            {isBook && (
                <img className="book position-absolute top-0 end-0 translate-middle clickable" src={require('../img/book.png')} alt="Book" onClick={book} />
            )}

            {isLettersVisible && (
                <Book />
            )}

        </div>
    )
}

export default BookshelfView;