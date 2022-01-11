import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = ( category ) => {

    const [ state, setState]  = useState({
        data : [],
        loading: true
    });

    useEffect(() => {
        getGifs( category )
            .then( img => {
                if (img.length > 0) {
                    console.log('modigfica el estado')
                    setState({
                        data: img,
                        loading: false
                    })
                }
            })
    }, [ category ])

    return state

}