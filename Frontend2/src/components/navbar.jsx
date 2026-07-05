function Navbar(){
    const date = new Date();
    const currentDate = date.toLocaleDateString();
    const currentTime = date.toLocaleTimeString();
    return(
        <div className="Navbar">
            <div >
                <h1 className="Maintitle">STC </h1>
                <p className="subtitle">Dashboard </p>
            </div>

            <div className="right">
                <p>{currentDate} {currentTime}</p>
            </div>
        </div>
    )
}
export default Navbar;