import React from 'react'

function Header() {

    return (
        <>
            {/*/ Nav Star /*/}
            <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll" href="#page-top">DevFolio</a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll active" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#service">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#work">Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*/ Nav End */}
        </>
    )
}

export default Header