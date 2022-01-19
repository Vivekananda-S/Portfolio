import "./intro.scss"


export default function intro() {


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assests/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm </h2>
                    <h1>Vivekananda Shonti</h1>
                    <h3>Computer Science Student<span /*ref={textRef}*/> At MLR Institue of Technology</span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assests/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
