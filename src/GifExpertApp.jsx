import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


function GifExpertApp() {
    const [categories, setCategories] = useState(['Pokemon']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <div className="header">
                <h1>Gif Expert App</h1>
            <AddCategory onNewCategory={onAddCategory} />
            </div>
            {
                categories.map((category) =>
                    <GifGrid key={category}
                        category={category} />
                )
            }
        </>
    )
};

export default GifExpertApp