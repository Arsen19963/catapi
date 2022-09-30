import React, { useState, useEffect } from 'react'
import style from './CatsImages.module.scss'
const CatsImages = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        async function getCatsImages() {
            let data = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
                .then(response => response.json()).
                then(json => setImages(json))
        }
        getCatsImages();
    }, [])

    // const renderedList = images.map(image => <div><img src={image.url} /></div>)
    return (
        <div className={style.container}>
            {images.map((image, i) => {
                return (<div key={i} className={style.imgContainer}><img src={image.url} /></div>)
            })}
        </div>
    )
}

export default CatsImages