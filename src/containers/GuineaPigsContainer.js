import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const GUINEAPATHS = [
  "https://raw.githubusercontent.com/ARBUCHELI/PROJECTS-RESOURCES-PICTURES/master/GUINEA%20PIGS%20PICTURES/guinea-pic-1.jpg",
  "https://raw.githubusercontent.com/ARBUCHELI/PROJECTS-RESOURCES-PICTURES/master/GUINEA%20PIGS%20PICTURES/guinea-pic-2.jpg",
  "https://raw.githubusercontent.com/ARBUCHELI/PROJECTS-RESOURCES-PICTURES/master/GUINEA%20PIGS%20PICTURES/guinea-pic-3.jpg",
  "https://raw.githubusercontent.com/ARBUCHELI/PROJECTS-RESOURCES-PICTURES/master/GUINEA%20PIGS%20PICTURES/guinea-pic-4.jpg",
];

function GuineaPigs() {
  const [currentGP, setCurrentGP] = useState(0);
	const [favoriteGP, setFavoriteGP] = useState(0);
	const src = GUINEAPATHS[currentGP];

  const favoriteChangeHandler = (event) => {
    setFavoriteGP(parseInt(event.target.value));
  }

  const resetFavoriteHandler = () => {
    setFavoriteGP(0);
  }

  useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentGP(prevGP => {
				const nextGP = prevGP + 1;
				return nextGP % GUINEAPATHS.length;
			});
		}, 5000)
		return () => clearInterval(intervalId);
	}, []);


	return (
    <>
      <div data-testid="guineaPigsSlideShow" id="guineaPigsSlideShow">
        <h1>COOL GUINEA PIGS</h1>
        <img alt="Guinea Pigs Slideshow" src={src} className={currentGP === favoriteGP? "favorite" : ""}/>
      </div>
		  <div data-testid="guineaPigsForm" id="guineaPigsForm">	
			  <label>Choose Your Favorite Guinea Pig:
          <select value={favoriteGP} onChange={favoriteChangeHandler}>
            <option value="0">Alex</option>
            <option value="1">Izzy</option>
            <option value="2">Brandon</option>
            <option value="3">DJ</option>
          </select>
        </label>
        <button onClick={resetFavoriteHandler}>Reset Favorite</button>
		  </div>
  </>
  );
}

export default GuineaPigs;