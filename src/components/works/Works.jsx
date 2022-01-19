import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assests/mobile.png" alt="" />
                                </div>
                                <h2>Title</h2>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                unchanged.
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/zymr8_steps_the_mobile_app_dev_lifecycle_cover.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <img src="assests/arrow.png" className="arrow left" alt="" />
                <img src="assests/arrow.png" className="arrow right" alt="" />

            </div>

        </div>
    )
}
