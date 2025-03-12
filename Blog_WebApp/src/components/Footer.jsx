import React from 'react'

function Footer() {

    return (
        <>
            {/*/ Section Contact-Footer Star /*/}
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: "url('/devfolio-master/img/overlay-bg.jpg')" }}>
                <div className="overlay-mf"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="contact-mf">
                                <div id="contact" className="box-shadow-full">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    Send Message Us
                                                </h5>
                                            </div>
                                            <div>
                                                <form action="" method="post" role="form" className="contactForm">
                                                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                                                    <div id="errormessage"></div>
                                                    <div className="row">
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="title-box-2 pt-4 pt-md-0">
                                                <h5 className="title-left">
                                                    Get in Touch
                                                </h5>
                                            </div>
                                            <div className="more-info">
                                                <p className="lead">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                                                    expedita aperiam aliquid at.
                                                    Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                                                    mollitia inventore?
                                                </p>
                                                <ul className="list-ico">
                                                    <li><span className="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                                                    <li><span className="ion-ios-telephone"></span> (617) 557-0089</li>
                                                    <li><span className="ion-email"></span> contact@example.com</li>
                                                </ul>
                                            </div>
                                            <div className="socials">
                                                <ul>
                                                    <li><a href=""><span className="ico-circle"><i className="ion-social-facebook"></i></span></a></li>
                                                    <li><a href=""><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                                                    <li><a href=""><span className="ico-circle"><i className="ion-social-twitter"></i></span></a></li>
                                                    <li><a href=""><span className="ico-circle"><i className="ion-social-pinterest"></i></span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="copyright-box">
                                    <p className="copyright">&copy; Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
                                    <div className="credits">
                                        {/*
                                        All the links in the footer should remain intact.
                                        You can delete the links only if you purchased the pro version.
                                        Licensing information: https://bootstrapmade.com/license/
                                        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
                                        */}
                                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
            {/*/ Section Contact-footer End /*/}

            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
            <div id="preloader"></div>
        </>
    )
}

export default Footer