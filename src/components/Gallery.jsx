import React from 'react';
import { Redirect } from 'react-router-dom';
import Slider from './Slider';
function Gallery({ images, isAuth }) {
    return (
        isAuth ?
            <div>
                <Slider images={images} />
            </div>
            : <Redirect to='/login' />
    )
}

export default Gallery;
