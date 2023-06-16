import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import GuineaPigsForm from "../components/GuineaPigsForm";
import GuineaPigsSlideShow from "../components/GuineaPigsSlideShow";

const GUINEAPATHS = [
  "https://raw.githubusercontent.com/ARBUCHELI/PROJECTS-RESOURCES-PICTURES/master/GUINEA%20PIGS%20PICTURES/guinea-pic-1.jpg",
  "https://raw.githubusercontent.com/ARBUCHELI/PROJECTS-RESOURCES-PICTURES/master/GUINEA%20PIGS%20PICTURES/guinea-pic-2.jpg",
  "https://raw.githubusercontent.com/ARBUCHELI/PROJECTS-RESOURCES-PICTURES/master/GUINEA%20PIGS%20PICTURES/guinea-pic-3.jpg",
  "https://raw.githubusercontent.com/ARBUCHELI/PROJECTS-RESOURCES-PICTURES/master/GUINEA%20PIGS%20PICTURES/guinea-pic-4.jpg",
];

function GuineaPigsContainer() {
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
      <GuineaPigsSlideShow src={src} isFavorite ={currentGP === favoriteGP}/>
      <GuineaPigsForm favoriteGP={favoriteGP} onSelectFavorite={favoriteChangeHandler} onResetFavorite={resetFavoriteHandler}/>
    </>
  );
}

export default GuineaPigsContainer;
