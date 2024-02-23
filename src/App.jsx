import React, { useState, useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import "./styles.css";
import { Stars } from "./components/Stars.jsx";
import { Button } from "./components/Button.jsx";
import dog from "./images/dog.jpg";
import bobbo from "./images/bobbo.png";
import car from "./images/car.png";
import fart from "./sounds/fart.mp3";
import bobbos from "./sounds/bobbo.mp3";
import cars from "./sounds/car-horn.mp3";
import ghosts from "./sounds/ghost.mp3";
import voffs from "./sounds/voff.mp3";
import wrong from "./sounds/wrong.mp3";
import yay from "./sounds/yay.mp3";

const soundOne = new Audio(fart);
const soundTwo = new Audio(voffs);

const soundThree = new Audio(ghosts);

const soundFour = new Audio(bobbos);

const soundFive = new Audio(cars);
let soundArr = [soundOne, soundTwo, soundThree, soundFour, soundFive];

const winnerSound = new Audio(yay);

const wrongSound = new Audio(wrong);

function App() {
  const [firstSound, setFirstSound] = useState(
    soundArr[Math.floor(Math.random() * soundArr.length)]
  );
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [isWrongButton, setIsWrongButton] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [test, setTest] = useState(false);

  useEffect(() => {
    if (isStarted) {
      setTimeout(() => {
        firstSound.play();
      }, 2000);
    }
  }, [isStarted, firstSound, test]);

  function Click(e) {
    if (isStarted) {
      if (this.sound.src === firstSound.currentSrc) {
        this.sound.play();
        setTimeout(() => {
          setIsCorrect(true);
          winnerSound.play();
          setTimeout(() => {
            setIsCorrect(false);
            setFirstSound(
              soundArr[Math.floor(Math.random() * soundArr.length)]
            );
            setTest(!test);
          }, 2000);
        }, 1000);
      } else {
        wrongSound.play();
        setIsWrong(true);
        setIsWrongButton(this.name);
        setTimeout(() => {
          setIsWrong(false);
          setIsWrongButton(null);
        }, 500);
      }
    }
  }

  return (
    <div className="App">
      {!isStarted && (
        <div className="overlay">
          <button
            className="startBtn"
            onClick={() =>
              setTimeout(() => {
                setIsStarted(true);
              }, 500)
            }
          >
            ▶️
          </button>
        </div>
      )}
      <Stars />
      {isCorrect && <ConfettiExplosion />}

      <Button
        isWrongButton={isWrongButton}
        isWrong={isWrong}
        Click={Click}
        name="poop"
        img="💩"
        sound={soundOne}
      />

      <Button
        isWrongButton={isWrongButton}
        isWrong={isWrong}
        Click={Click}
        name="dog"
        // img="🐶"
        sound={soundTwo}
        image={dog}
      />

      <Button
        isWrongButton={isWrongButton}
        isWrong={isWrong}
        Click={Click}
        name="ghost"
        img="👻"
        sound={soundThree}
      />

      <Button
        isWrongButton={isWrongButton}
        isWrong={isWrong}
        Click={Click}
        name="bobbo"
        img=""
        sound={soundFour}
        image={bobbo}
      />

      <Button
        isWrongButton={isWrongButton}
        isWrong={isWrong}
        Click={Click}
        name="car"
        img=""
        sound={soundFive}
        image={car}
      />
    </div>
  );
}
export default App;
