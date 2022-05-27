import React from 'react';

const Riddle = () => {

    return (
        <div>
            <img className="riddle position-absolute top-50 start-50 translate-middle" src={require('../img/pieceofpaper.png')} alt="background" />
            <p className="font position-absolute top-50 start-50 translate-middle" style={{fontSize:"2vw"}}>I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?</p>
        </div>
    )
}

export default Riddle;