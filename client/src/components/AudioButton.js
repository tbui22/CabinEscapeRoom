import React from 'react';

const AudioButton = (props) => {
    return (
        <div>
            <img className="muteButton clickable position-absolute top-0 end-0" src={props.audioIcon} alt="sound" onClick={props.onClickAudio} />
        </div>
    )
}

export default AudioButton;