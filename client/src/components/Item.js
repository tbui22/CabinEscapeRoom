import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
// import { useRaisedShadow } from "./use-raised-shadow";
import Painting from '../files/pictures.wav';

export const Item = (props) => {
    const {item} = props;
    const { Howl, Howler } = require('howler');

  const sound = () => {
    let effect = new Howl({
      src: [Painting],
      volume: 20,
  });
  effect.play();
  };
  
  const y = useMotionValue(0);
//   const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item value={item} id={item}>
      <img draggable="false" src = {item} className="painting"/>
    </Reorder.Item>
  );
};