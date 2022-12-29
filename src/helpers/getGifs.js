export const getGifs = async (category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=X4xTtrawctS1Um9JO6CXze3XOltRlgAF&q=${category}&limit=10`;
        const response = await fetch(url);
        const { data } = await response.json();

        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))
        return gifs;
    } catch (error) {
        console.log(error)
    }
};
