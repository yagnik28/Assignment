import { Typography } from "@mui/material";
import appleGif from "../public/GIFs/apple.gif"
import bearGif from "../public/GIFs/bear.gif"
import beeGif from "../public/GIFs/bee.gif"
import bicycleGif from "../public/GIFs/bicycle.gif"
import coinGif from "../public/GIFs/coin.gif"
import duckGif from "../public/GIFs/duck.gif"
import eyeGif from "../public/GIFs/eye.gif"
import foodTruckGif from "../public/GIFs/food-truck.gif"
import frenchFriesChipsGif from "../public/GIFs/french-fries-chips.gif"
import giftGif from "../public/GIFs/gift.gif"
import homeGif from "../public/GIFs/home.gif"
import horseGif from "../public/GIFs/horse.gif"

const Letter = ({ letterIndex, letters }) => {
    const mapping = {
        0: appleGif,
        1: bearGif,
        2: coinGif,
        3: duckGif,
        4: eyeGif,
        5: foodTruckGif,
        6: giftGif,
        7: horseGif
    };

    return (
        <>
            
            <div className="gif-container">
                <img src={mapping[letterIndex]} alt="GIF" className="gif"/>
                <Typography style={{
                    fontSize: "50px",
                    color: "brown"
                }}> 
                {letters[letterIndex]} 
                </Typography>
            </div>
        </>
    )
};

export default Letter;