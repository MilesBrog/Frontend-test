import './thumnail.css'

const thumnail = (props) => {
    const { profile_image_url, name, open_time, close_time, rating, images01, images02, images03, categories } = props

    return (
        <div className={categories.join(" ") + " clickable"}>
            <div className="detail-top">
                <img src={profile_image_url} alt={profile_image_url} className="profile-store" />
                <div className="sperate-detail">
                    <h6 className="store-name">{name}</h6>
                    <p><i className="fa-regular fa-calendar store-date" /> {open_time === "closed" ? "" : open_time + " AM"} - {close_time === "closed" ? "" : close_time + " PM"}</p>
                    <h7><i className="fa-solid fa-circle store-rating" /> {rating}</h7>
                </div>
            </div>
            <div className="detail-bottom">
                <img src={images01} alt={images01} id="pic-store" className="pic-left" />
                <img src={images02} alt={images02} id="pic-store" className="pic-center"/>
                <img src={images03} alt={images03} id="pic-store" className="pic-right"/>
            </div>
        </div>
    )
}

export default thumnail;