import React from 'react';
import HTMLFlipBook from "react-pageflip";
import { Howl, Howler } from 'howler';
import TurnPage from "../files/turnPage.wav";
import '../CSS/BookshelfView.css';

const Book = (props) => {
    const { Howl, Howler } = require('howler');

    const pageSound = () => {
        let effect = new Howl({
            src: [TurnPage],
            volume: 2
        });
        effect.play();
    };

    return (
        <div className="BookClues font">
            <HTMLFlipBook width={300} height={420} size="stretch" position="absolute">

                <div className="rightPage">
                    <p style={{ margin: "10%" }}>May 27, 1927</p>
                    <p className="bookText">Not knowing what the rest of the day held for me, I decided on taking a journey away from the cabin. An old soul like me never liked going far from where I am comfortable, mainly the four walls of this cabin. However, today was different. Something beckoned me to leave. It must have been the lack of ingredients to make the special tea, whose ingredients can only be found high up in the mountains in a valley along a small river. The tea was a recipe that was passed down from my late grandmother who found enjoyment in tea making.</p>
                </div>

                <div className="leftPage" onClick={pageSound}>
                    <div className="position-absolute">
                        <p style={{ margin: "10%" }}>June 2, 1927</p>
                        <p className="bookText">Today, I finally made it to the hidden valley where a vast field of flowers awaited me. Here is home to the Sideritis flower found only in specific locations such as this. The petals of this flower not only contributes a sweet aroma to the tea, but also possesses medicinal properties which makes up for the difficult journey to harvest such a flower. As to not disturb the overall balance of nature, I decided to only pick 5 flowers to bring home. With proper rationing, this will probably last about 3 months. </p>
                    </div>
                </div>

                <div className="rightPage" onClick={pageSound}>
                    <p style={{ margin: "10%" }}>June 9, 1927</p>
                    <p className="bookText">Under normal circumstances, I would have already been back to the comforts of my humble abode by this day. However, a storm quickly changed my plans. As I awaited for the passage of the storm in a small cave I happened to find, I began thinking of what lies beyond the woods, the valley, the four walls of my cabin. I closed my eyes and thought of a bright sunny beach, with warm sand and clear waters. These past few years have not been so kind to me as what I once called my ailments have now become persistent, worsening... disabling. I have even started to forget most things. To jog my memory, I left clues around the cabin in order to important things.</p>
                </div>

                <div className="leftPage"><p style={{ margin: "10%" }}>December 15, 1927</p>
                    <p className="bookText">Today is perfect. The crackling fireplace has a steady glow, the water is boiling for my soon to be ready tea, I am snuggled up writing my last journal entry, as the moon sits in the sky with its shining light giving the snow outside a glistening aura, enchanting me. </p>
                </div>

            </HTMLFlipBook>
        </div>
    );
}

export default Book;
