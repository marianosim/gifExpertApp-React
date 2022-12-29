import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        try {
            const newImages = await getGifs(category);
            setImages(newImages);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getImages();
    }, []);

    // useEffect( () => {
    //     getGifs(category)
    //     .then(newImages => setImages(newImages));
    // }, [category]);

    return {
        images,
        isLoading
    }
}
