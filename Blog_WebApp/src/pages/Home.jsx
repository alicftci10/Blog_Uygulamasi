import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeScrollSpy, initializeTyped, checkUserData } from "../js/homeUtils";
import { FaCircleUser } from "react-icons/fa6";
import '../css/Home.css'
import { logoutUser } from "../redux/slices/loginSlice";
import { useDispatch } from 'react-redux';

function Home() {

    const data = JSON.parse(localStorage.getItem("user_data"));

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
        checkUserData(navigate)
    };

    useEffect(() => {
        checkUserData(navigate);
    }, [navigate]);

    useEffect(() => {
        initializeTyped();
    }, []);

    useEffect(() => {
        initializeScrollSpy();
    }, []);

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
                                <a className="nav-link js-scroll active" href="#home">Ana Sayfa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll" href="#about">Hakkımda</a>
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
                            <li className="nav-item">
                                <FaCircleUser
                                    style={{
                                        cursor: "pointer",
                                        color: "white",
                                        position: 'relative',
                                        top: '5px',
                                        fontSize: '25px',
                                        marginLeft: '10px'
                                    }}
                                    onClick={toggleDropdown}
                                />
                                {isOpen && (
                                    <div className="dropdown-menu show">
                                        <span className="dropdown-item" style={{ borderRadius: '10px 10px 0 0', backgroundColor: 'inherit' }}>{data.ad + " " + data.soyad}</span>
                                        <a className="dropdown-item" style={{ borderRadius: '0 0 10px 10px' }} href="#" onClick={handleLogout}>Çıkış</a>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            {/*/ Nav End */}

            {/*/ Intro Skew Star /*/}
            <div id="home" className="intro route bg-image" style={{ backgroundImage: "url('/devfolio-master/img/intro-bg.jpg')" }} >
                <div className="overlay-itro"></div>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            {/*<p className="display-6 color-d">Hello, world!</p>*/}
                            <h1 className="intro-title mb-4">Ali Çiftçi</h1>
                            <p className="intro-subtitle"><span className="text-slider-items"></span><strong className="text-slider"></strong></p>
                            {/* <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
                        </div>
                    </div>
                </div>
            </div >
            {/*/ Intro Skew End /*/}

            < section id="about" className="about-mf sect-pt4 route" >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5">
                                                <div className="about-img">
                                                    <img src="/devfolio-master/img/testimonial-2.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-7">
                                                <div className="about-info">
                                                    <p><span className="title-s">Name: </span> <span>Morgan Freeman</span></p>
                                                    <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                                                    <p><span className="title-s">Email: </span> <span>contact@example.com</span></p>
                                                    <p><span className="title-s">Phone: </span> <span>(617) 557-0089</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-mf">
                                            <p className="title-s">Skill</p>
                                            <span>HTML</span> <span className="pull-right">85%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <span>CSS3</span> <span className="pull-right">75%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <span>PHP</span> <span className="pull-right">50%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                            <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    About me
                                                </h5>
                                            </div>
                                            <p className="lead">
                                                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                                                imperdiet et, porttitor
                                                at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                                                porttitor accumsan tincidunt.
                                            </p>
                                            <p className="lead">
                                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                                                porttitor volutpat. Vestibulum
                                                ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                                            </p>
                                            <p className="lead">
                                                Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                                Nulla porttitor accumsan
                                                tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/*/ Section Services Star /*/}
            < section id="service" className="services-mf route" >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">
                                    Services
                                </h3>
                                <p className="subtitle-a">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="ion-monitor"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Web Design</h2>
                                    <p className="s-description text-center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                        provident vitae! Magni
                                        tempora perferendis eum non provident.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="ion-code-working"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Web Development</h2>
                                    <p className="s-description text-center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                        provident vitae! Magni
                                        tempora perferendis eum non provident.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="ion-camera"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Photography</h2>
                                    <p className="s-description text-center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                        provident vitae! Magni
                                        tempora perferendis eum non provident.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="ion-android-phone-portrait"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Responsive Design</h2>
                                    <p className="s-description text-center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                        provident vitae! Magni
                                        tempora perferendis eum non provident.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="ion-paintbrush"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Graphic Design</h2>
                                    <p className="s-description text-center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                        provident vitae! Magni
                                        tempora perferendis eum non provident.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="ion-stats-bars"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Marketing Services</h2>
                                    <p className="s-description text-center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                        provident vitae! Magni
                                        tempora perferendis eum non provident.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/*/ Section Services End /*/}

            < div className="section-counter paralax-mf bg-image" style={{ backgroundImage: "url('/devfolio-master/img/counters-bg.jpg')" }}>
                <div className="overlay-mf"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-lg-3">
                            <div className="counter-box">
                                <div className="counter-ico">
                                    <span className="ico-circle"><i className="ion-checkmark-round"></i></span>
                                </div>
                                <div className="counter-num">
                                    <p className="counter">450</p>
                                    <span className="counter-text">WORKS COMPLETED</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3">
                            <div className="counter-box pt-4 pt-md-0">
                                <div className="counter-ico">
                                    <span className="ico-circle"><i className="ion-ios-calendar-outline"></i></span>
                                </div>
                                <div className="counter-num">
                                    <p className="counter">15</p>
                                    <span className="counter-text">YEARS OF EXPERIENCE</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3">
                            <div className="counter-box pt-4 pt-md-0">
                                <div className="counter-ico">
                                    <span className="ico-circle"><i className="ion-ios-people"></i></span>
                                </div>
                                <div className="counter-num">
                                    <p className="counter">550</p>
                                    <span className="counter-text">TOTAL CLIENTS</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-lg-3">
                            <div className="counter-box pt-4 pt-md-0">
                                <div className="counter-ico">
                                    <span className="ico-circle"><i className="ion-ribbon-a"></i></span>
                                </div>
                                <div className="counter-num">
                                    <p className="counter">36</p>
                                    <span className="counter-text">AWARD WON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/*/ Section Portfolio Star /*/}
            < section id="work" className="portfolio-mf sect-pt4 route" >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">
                                    Portfolio
                                </h3>
                                <p className="subtitle-a">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="/devfolio-master/img/work-1.jpg" data-lightbox="gallery-mf">
                                    <div className="work-img">
                                        <img src="/devfolio-master/img/work-1.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Lorem impsum dolor</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="/devfolio-master/img/work-2.jpg" data-lightbox="gallery-mf">
                                    <div className="work-img">
                                        <img src="/devfolio-master/img/work-2.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Loreda Cuno Nere</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="/devfolio-master/img/work-3.jpg" data-lightbox="gallery-mf">
                                    <div className="work-img">
                                        <img src="/devfolio-master/img/work-3.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Mavrito Lana Dere</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="/devfolio-master/img/work-4.jpg" data-lightbox="gallery-mf">
                                    <div className="work-img">
                                        <img src="/devfolio-master/img/work-4.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Bindo Laro Cado</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="/devfolio-master/img/work-5.jpg" data-lightbox="gallery-mf">
                                    <div className="work-img">
                                        <img src="/devfolio-master/img/work-5.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Studio Lena Mado</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href="/devfolio-master/img/work-6.jpg" data-lightbox="gallery-mf">
                                    <div className="work-img">
                                        <img src="/devfolio-master/img/work-6.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Studio Big Bang</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
            {/*/ Section Portfolio End /*/}
            {/*/ Section Testimonials Star /*/}
            <div className="testimonials paralax-mf bg-image" style={{ backgroundImage: "url('/devfolio-master/img/overlay-bg.jpg')" }} >
                <div className="overlay-mf"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="testimonial-mf" className="owl-carousel owl-theme">
                                <div className="testimonial-box">
                                    <div className="author-test">
                                        <img src="/devfolio-master/img/testimonial-2.jpg" alt="" className="rounded-circle b-shadow-a" />
                                        <span className="author">Xavi Alonso</span>
                                    </div>
                                    <div className="content-test">
                                        <p className="description lead">
                                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                        </p>
                                        <span className="comit"><i className="fa fa-quote-right"></i></span>
                                    </div>
                                </div>
                                <div className="testimonial-box">
                                    <div className="author-test">
                                        <img src="/devfolio-master/img/testimonial-4.jpg" alt="" className="rounded-circle b-shadow-a" />
                                        <span className="author">Marta Socrate</span>
                                    </div>
                                    <div className="content-test">
                                        <p className="description lead">
                                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                        </p>
                                        <span className="comit"><i className="fa fa-quote-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*/ Section Blog Star /*/}
            <section id="blog" className="blog-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">
                                    Blog
                                </h3>
                                <p className="subtitle-a">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-blog">
                                <div className="card-img">
                                    <a href="/devfolio-master/blog-single.html"><img src="/devfolio-master/img/post-1.jpg" alt="" className="img-fluid" /></a>
                                </div>
                                <div className="card-body">
                                    <div className="card-category-box">
                                        <div className="card-category">
                                            <h6 className="category">Travel</h6>
                                        </div>
                                    </div>
                                    <h3 className="card-title"><a href="/devfolio-master/blog-single.html">See more ideas about Travel</a></h3>
                                    <p className="card-description">
                                        Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                                        a pellentesque nec,
                                        egestas non nisi.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <div className="post-author">
                                        <a href="#">
                                            <img src="/devfolio-master/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                                            <span className="author">Morgan Freeman</span>
                                        </a>
                                    </div>
                                    <div className="post-date">
                                        <span className="ion-ios-clock-outline"></span> 10 min
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-blog">
                                <div className="card-img">
                                    <a href="/devfolio-master/blog-single.html"><img src="/devfolio-master/img/post-2.jpg" alt="" className="img-fluid" /></a>
                                </div>
                                <div className="card-body">
                                    <div className="card-category-box">
                                        <div className="card-category">
                                            <h6 className="category">Web Design</h6>
                                        </div>
                                    </div>
                                    <h3 className="card-title"><a href="/devfolio-master/blog-single.html">See more ideas about Travel</a></h3>
                                    <p className="card-description">
                                        Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                                        a pellentesque nec,
                                        egestas non nisi.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <div className="post-author">
                                        <a href="#">
                                            <img src="/devfolio-master/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                                            <span className="author">Morgan Freeman</span>
                                        </a>
                                    </div>
                                    <div className="post-date">
                                        <span className="ion-ios-clock-outline"></span> 10 min
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-blog">
                                <div className="card-img">
                                    <a href="/devfolio-master/blog-single.html"><img src="/devfolio-master/img/post-3.jpg" alt="" className="img-fluid" /></a>
                                </div>
                                <div className="card-body">
                                    <div className="card-category-box">
                                        <div className="card-category">
                                            <h6 className="category">Web Design</h6>
                                        </div>
                                    </div>
                                    <h3 className="card-title"><a href="/devfolio-master/blog-single.html">See more ideas about Travel</a></h3>
                                    <p className="card-description">
                                        Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                                        a pellentesque nec,
                                        egestas non nisi.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <div className="post-author">
                                        <a href="#">
                                            <img src="/devfolio-master/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                                            <span className="author">Morgan Freeman</span>
                                        </a>
                                    </div>
                                    <div className="post-date">
                                        <span className="ion-ios-clock-outline"></span> 10 min
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*/ Section Blog End /*/}

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

            <a href="#page-top" className="back-to-top js-scroll"><i className="fa fa-chevron-up"></i></a>
        </>
    )
}

export default Home