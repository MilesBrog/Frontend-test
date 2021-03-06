import './AppHeaderTop.css'

const AppHeaderTop = () => {
    return (
        <header className="header-top">
            <div className="right">
                <i className="fa-solid fa-bell responsive" />
                <img src="../img/profile-pic.png" alt="Profile pic" />
                <p className="responsive">UserName</p>
                <i className="fa-solid fa-angle-down responsive" />
            </div>
        </header>
    )
}

export default AppHeaderTop;