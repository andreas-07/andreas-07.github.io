import React, { Component } from "react";
import { useEffect, useState } from "react";
import ReactCardCarousel from "react-card-carousel";
import { BackgroundImage, LoadingOverlay } from '@mantine/core';



// const getCount = async () => {
//     const response = await fetch("https://trustmarket.z01.azurefd.net/nfts/count?collection=ETROOPS-f6130f", {
//         method: 'GET', }
//     ).then(response => response.body)
//     return await response;
// }

const getNftCollection = async () => {
    // var count = await getCount();
    const response = await fetch('https://trustmarket.z01.azurefd.net/nfts?collection=ETROOPS-f6130f&withMetadata=true&from=0&size=48',
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
    return await response.json();
}


function MyCarousels() {
    const [slides, setSlides] = useState([]);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // var nftItemsArray = getNftCollection();
        // var auxSlidesArray = [];
        // for (var i = 0; i < nftItemsArray.length; i++) {
        //     auxSlidesArray.push(nftItemsArray[i])
        // }

        // if (slides.length === 0) {
        //     setSlides(auxSlidesArray)
        // }
        fetch('https://trustmarket.z01.azurefd.net/nfts?collection=ETROOPS-f6130f&withMetadata=true&from=0&size=48',
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => setSlides(data), setVisible(false));
    }, []);



    const CONTAINER_STYLE = {
        position: "relative",
        height: "100%",
        width: "70%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle",
        margin: "0 auto"
    };


    const CARD_STYLE = {
        height: "600px",
        width: "600px",
        paddingTop: "80px",
        textAlign: "center",
        background: "#52C0F5",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box"
    };

    return (<>
        <LoadingOverlay visible={visible} />
        <div style={CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                {slides?.map((slide) => {
                    return <img style={{
                        height: "100%",
                        width: "100%",
                        textAlign: "center",
                        color: "#FFF",
                        fontFamily: "sans-serif",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        borderRadius: "10px",
                        boxSizing: "border-box"}} src={slide.url}></img>
                })}
            </ReactCardCarousel>
        </div>
        </>
    );
}
export default MyCarousels
