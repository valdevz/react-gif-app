import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = props => {

    const [categories, setcategories] = useState(['Deadpool'])

    return (
        <>
            <h2>Gif Expert</h2>
            <hr />
            <AddCategory setcategories={setcategories}/>

            <ol>
                {
                    
                    categories.map((category) => (
                    <GifGrid
                        category={category}
                        key={category}
                    />
                ))
            }
            </ol>
        </>
    )
}

export default GifExpertApp
