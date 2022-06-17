import React, { useState } from 'react';
import './Thumnail.css'

const Thumnail = (props) => {
    const { profile_image_url, name, open_time, close_time, rating, picture, categories } = props
    const [currentImage, setImage] = useState(0);

    const nextImage = () => {
        setImage(currentImage === picture.length - 1 ? 0 : currentImage + 1);
    }

    const previousImage = () => {
        setImage(currentImage === 0 ? picture.length - 1 : currentImage - 1);
    }

    console.log(currentImage);

    return (
        <div className={categories.join(" ") + " clickable"}>
            <div className="detail-top">
                <img src={profile_image_url} alt={profile_image_url} className="profile-store" />
                <div className="basic-detail">
                    <h6 className="store-name">{name}</h6>
                    <p><i className="fa-regular fa-calendar store-date" /> {open_time === "closed" ? "" : open_time + " AM"} - {close_time === "closed" ? "" : close_time + " PM"}</p>
                    <p><i className="fa-solid fa-star" /> {rating}</p>
                </div>
            </div>
            <div className="detail-bottom">
                <div className="detail-image">
                    {picture.map((data) => { return <img src={data} alt="hoho" className="image" />; })}
                </div>
                <section className='detail-slider'>
                    <i className="fa-solid fa-circle-arrow-left" onClick={previousImage} />
                    <i className="fa-solid fa-circle-arrow-right" onClick={nextImage} />
                    {picture.map((data, index) => {
                        return (
                            <div className={index === currentImage ? "slide-active" : "slide"}>
                                {index === currentImage && (
                                    <img src={data} alt={"image " + parseInt(currentImage + 1).toString()} className="slider-image" />
                                )}
                            </div>
                        );
                    })}
                </section>
            </div>
        </div>
    )
}

export default Thumnail;
/*
                
            */
/*<img src={images01} alt={images01} id="pic-store" className="pic-left" />
                <img src={images02} alt={images02} id="pic-store" className="pic-center"/>
                <img src={images03} alt={images03} id="pic-store" className="pic-right"/>*/