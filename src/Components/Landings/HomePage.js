import React, { useState } from "react";
import pigFly from '../../img/pig-chuck.gif';
import blank from '../../img/blank.png';
import pigSound from '../../sounds/pig-shot-fx.mp3';
import "./HomePage.css";
import useSound from 'use-sound';

export default function HomePage() {

  const [flyPig, setFlyPig] = useState(false);
  const [play] = useSound(pigSound);

  const handleLaunch = (e) => {
    e.preventDefault();
    setFlyPig(true);
    play();
    setTimeout(()=>setFlyPig(false), 1000);
  }

  return (
    <>
    <div className="containerHome d-flex justify-content-center" style={{width:"100%"}}>
      <img src={flyPig ? pigFly : blank} alt="homescreen" style={{height:"800px"}} />
      <button type="button" className="butn" onClick={handleLaunch}>Launch Pig</button>
    </div>
    </>
  );
}
