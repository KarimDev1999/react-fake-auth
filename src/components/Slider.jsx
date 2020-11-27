import React, { useState, Fragment } from 'react'

function Slider({ images }) {
    const [currentIndex, setIndex] = useState(0);

    const onLeft = () => {
        const nextIndex = currentIndex - 1;
        if (nextIndex < 0) {
            setIndex(images.length - 1)
        }
        else {
            setIndex(nextIndex)
        }
    }
    const onRight = () => {

        const nextIndex = currentIndex + 1;
        if (nextIndex > images.length - 1) {
            setIndex(0)
        }
        else {
            setIndex(nextIndex)
        }
    }

    return (
        <div>

            <h1 className='text-center'>Slider</h1>

            <div className='slider'>

                {images &&
                    <Fragment>
                        <button className='button' onClick={onLeft}>&lt;</button>
                        <div className='img'>
                            <img src={images[currentIndex]} alt="images" />
                        </div>
                        <button className='button' onClick={onRight}>&gt;</button>
                    </Fragment>


                }


            </div>
        </div>

    )
}

export default Slider
