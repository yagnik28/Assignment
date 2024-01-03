import { Button } from "@mui/material";
import { useState } from "react";
import Letter from "./Letter";

const Content = () => {
    const letters = ["A for Apple", "B for Bear", "C for Coin", "D for Duck", "E for Eye", "F for Food Truck", "G for Gift", "H for Horse"];
    const [curIndex, setCurIndex] = useState(0);

    const nextLetter = () => {
        setCurIndex((prevIndex) => (prevIndex + 1) % letters.length)
    };

    const prevLetter = () => {
        setCurIndex((prevIndex) => (prevIndex - 1 + letters.length) % letters.length);
    }

    return (
        <>
            <div style={{
                position: "absolute",
                top: "40%",
                display: "flex",
                justifyContent: "space-between",
                width: "100%"
            }}>
                <Button 
                    style={{
                        fontSize: "70px", 
                        color: "white", 
                        backgroundColor: "gray",
                        borderRadius: "100px",
                    }}
                    onClick={prevLetter}
                    >
                        &lt;
                </Button>
                <Letter letterIndex={curIndex} letters={letters}/>
                <Button 
                    style={{
                        fontSize: "70px", 
                        color: "white", 
                        backgroundColor: "gray",
                        borderRadius: "100px"
                    }}
                    onClick={nextLetter}
                    >
                        &gt;
                </Button>
            </div>
        </>
    )
}

export default Content;