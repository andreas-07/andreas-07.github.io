import {useEffect, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import TniCard from "./card";
import {LoadingOverlay } from '@mantine/core';
import { config } from "react-spring";
import {v4 as uuidv4} from "uuid"; 

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

function MyCarousel() {
    const [slides, setSlides] = useState([]);
    const [goToSlide, setGoToSlide] = useState(0);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        async function fetchData(){
            return await getNftCollection();
        }
        var nftItemsArray = fetchData();
        var auxSlidesArray = [];
        for (var i = 0; i < nftItemsArray.length; i++) {
            auxSlidesArray.push({ key: uuidv4(), index: i, content: <TniCard imageUrl={nftItemsArray[i].url} /> })
        }
        setVisible(false)
        if(slides.length === 0){
            setSlides(auxSlidesArray)
        }
        
    }, [slides.length]);
    
    return (
        <div style={{ width: "70%", height: "500px", margin: "0 auto" }}>
        <LoadingOverlay visible={visible} />
            {slides.length > 0 ? 
            <div onClick={() => {
                if(goToSlide < 48) {
                    setGoToSlide(goToSlide + 1)
                }
                else{
                    setGoToSlide(0);
                }
            }}>
                <Carousel
                slides={slides}
                goToSlide={goToSlide}
                offsetRadius="10"
                animationConfig={config.gentle}
            />
            </div> : <></>}
           
        </div>
    );
}
export default MyCarousel;
