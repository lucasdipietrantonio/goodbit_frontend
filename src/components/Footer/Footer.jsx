import React from "react";
import './Footer.scss';
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";

const Footer = () => {
    const openContact = () =>{
        // var body = document.body;
        // console.log("document");

            // body.classList.add("gb-contact-body");
        document.body.classList.add("gb-contact-body");
        setTimeout(() => {
            document.body.classList.add("gb-contact-overlay");
        }, 300);
        // document.body.classList.add("");
    }
return (
    <React.Fragment>
        <footer className="gb-footer">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="gb-footer-logo">
                        <Link to="/">
                            <img className="gb-footerlogo" alt="" src={require("../../assets/images/logo-footer.svg")}/>
                        </Link>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                    <div className="gb-footer-menu">
                    <h5>Learn</h5>
                        <div className="gb-learn-menu">
                            <ul>
                                <li>
                                    <Link to="/basics">Basics</Link>
                                </li>
                                <li>
                                    <Link to="/learn/history">In Depth</Link>
                                </li>
                                <li>
                                    <Link to="/learn/terms-glossary">Term Glossary</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className="gb-footer-menu">
                    <h5>How to</h5>
                    <div className="gb-learn-menu">
                        <ul>
                            <li>
                                <Link to="/invest/buy-crypto">How to Buy Cryptocurrency</Link>
                            </li>
                            <li>
                                <Link to="/wallets/what-is-wallet">What is a Wallet?</Link>
                            </li>
                            <li>
                                <Link to="/wallets/send-receive-crypto">How to Send/Receive Cryptocurrency</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className="gb-footer-menu">
                    <h5>Tools</h5>
                    <div className="gb-learn-menu">
                    <ul>
                        <li>
                            <Link to="/invest/buy-by-coin">Buy by Coin</Link>
                        </li>
                        <li>
                            <Link to="/wallets/find-wallets">Find a Wallet</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                <div className="gb-footer-menu">
                    <h5>More on us</h5>
                    <div className="gb-learn-menu">
                    <ul>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/license-content">License Content</Link>
                        </li>
                        <li>
                            <Link to="#" onClick={openContact}>Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>

                <div className="gb-mobile-ftr">
                        <div className="accordion gb-nav-accordian" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Learn
                                    </button>
                                </div>
                                <div id="collapseOne" className="gb-collapse-menu collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                <Link to="/basics">Basics</Link>
                                            </li>
                                            <li>
                                                <Link to="/learn/history">In Depth</Link>
                                            </li>
                                            <li>
                                                <Link to="/learn/terms-glossary">Term Glossary</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How to
                                    </button>
                                </div>
                                <div id="collapseTwo" className="gb-collapse-menu collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                <Link to="/invest/buy-crypto">How to Buy Cryptocurrency</Link>
                                            </li>
                                            <li>
                                                <Link to="/wallets/what-is-wallet">What is a Wallet?</Link>
                                            </li>
                                            <li>
                                                <Link to="/wallets/send-receive-crypto">How to Send/Receive Cryptocurrency</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Tools
                                    </button>
                                </div>
                                <div id="collapseThree" className="gb-collapse-menu collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                <Link to="/invest/buy-by-coin">Buy by Coin</Link>
                                            </li>
                                            <li>
                                                <Link to="/wallets/find-wallets">Find a Wallet</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        More on us
                                    </button>
                                </div>
                                <div id="collapseFour" className="gb-collapse-menu collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                <Link to="/about">About us</Link>
                                            </li>
                                            <li>
                                                <Link to="/license-content">License Content</Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={openContact}>Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gb-ftr-nav">
                            <ul>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/about">About us</Link>
                                </li>
                                <li>
                                    <Link to="/license-content">License Content</Link>
                                </li>
                                <li>
                                    <Link to='#' onClick={openContact}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="gb-ftr-social">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/Goodbit-467077723813775/" target="_blank" rel="noopener noreferrer">
                                        <i className="gb-fb-icon"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/Goodbit101" target="_blank" rel="noopener noreferrer">
                                        <i className="gb-twitter-icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>


            <div className="gb-last-footer">
                <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="btn-group dropup gb-language-blk">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        English
                    </button>
                    <div className="dropdown-menu">
                        <ul>
                        <li>
                            <Link to="#">
                                Coming soon
                            </Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                    <div className="gb-last-footer-menu">
                    <span>&#169;2018 Goodbit</span>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="gb-last-footer-menu clearfix">
                    <ul>
                        <li>
                            <Link to="/terms-of-services">
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                    <div className="gb-site-text">
                    {/* <span>Site by <a href="https://www.darkroom.ltd/" rel="noopener noreferrer" target="_blank">Darkroom</a></span> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </footer>

        <Contact/>
    </React.Fragment>

);
};



export default Footer;
