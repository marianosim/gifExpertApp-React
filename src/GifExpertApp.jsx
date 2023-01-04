import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


function GifExpertApp() {
    const [categories, setCategories] = useState([]);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <div className="header">
                <h1>Gif Expert App</h1>
                <div className="search-bar">
                    <AddCategory onNewCategory={onAddCategory} />
                    <input type='button' value='Borrar todo' onClick={() => setCategories([])}/>
                </div>
            </div>
            {
                categories.length < 1 && <h2>¡Empieza a buscar tus GIFs preferidos!</h2>
            }
            {
                categories.map(category =>
                    <GifGrid key={category}
                        category={category} />
                )
            }
        </>
    )
};

export default GifExpertApp