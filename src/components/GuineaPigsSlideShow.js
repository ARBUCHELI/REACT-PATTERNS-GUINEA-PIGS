import React from "react";


function GuineaPigsSlideShow({src, isFavorite}) {
    return (
        <div data-testid="guineaPigsSlideShow" id="guineaPigsSlideShow">
        <h1>COOL GUINEA PIGS</h1>
        <img alt="Guinea Pigs Slideshow" src={src} className={isFavorite? "favorite" : ""}/>
      </div>
    )
}

export default GuineaPigsSlideShow;