import './AppHeaderSide.css'

const AppHeaderSide = () => {
    return (
        <header className="header-sidebar">
            <img src="../img/logo-ics.png" alt="logo-ics" className="logo-side"/>
            <div className="border-bottom"></div>
            <i className="fa-solid fa-bars"><p>Place</p></i>
            <div className="border-bottom"></div>
        </header>
    )
}

export default AppHeaderSide;