// import React, { useState, useEffect } from 'react'

import { useFetchGif } from "../hooks/useFetchGif"

import { GifGridItem } from './GifGridItem';
export const GifGrid = ({ category }) => {
    
    const {data: images} = useFetchGif( category );

    return (
        <>
            { images.length > 0 && <h2>{category}</h2> }
            { images.length > 0 && <div className='card-grid'>
                    {
                        images.map(img => (
                            <GifGridItem 
                                key={img.id} 
                                {... img    }
                            />
                        ))
                    }
                {/* <button onClick={()=>setCount( count + 1 )}></button>*/}

            </div>}
        </>
    )   
}
