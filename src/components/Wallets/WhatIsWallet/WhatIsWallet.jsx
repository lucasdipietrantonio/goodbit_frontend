import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

import "../SendReceiveCrypto/SendReceiveCrypto.scss";
class WhatIsWallet extends Component {
    state = {
        referralRoute : ''
     }
    render() {
        return (
            <React.Fragment>
                <section className="gb-wallets-detail-main gb-buy-detail-main text-center">
                    <div className="container">
                        <div className="gb-wallet-banner-box">
                            <h2>Goodbit's</h2>
                            <h1>What is a wallet?</h1>
                            <p>Are you a Crypto user, investor, marketer, juggler, saver, or any other kind of person who owns cryptocurrency? Cool! Here’s a question: where is your cryptocurrency? Is it safe? How do you know…?</p>
                        </div>
                    </div>
                </section>
                <section className="gb-buy-crypto-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 offset-md-1 col-lg-2">
                                <div className="gb-crypto-menu-block">
                                    <div className="gb-sticky-crypto-menu">
                                        <h3>Menu</h3>
                                        <ul>
                                            <li onClick={(e) => this.scrollToContent(e,0)} className="active"><a >Overview</a></li>
                                            <li onClick={(e) => this.scrollToContent(e,1)}><a>Wallet Security</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 offset-md-1 col-lg-7">
                                <div className="gb-crypto-buydetail">
                                    <div className="gb-crypto-buy-block-main">
                                        <div className="gb-crypto-detail-row">
                                            <h3>Regardless of where your cryptocurrency is, it’s in some kind of wallet. Some wallets are safer than other wallets. Way, way safer. Unless you want your cryptocurrency to be taken from you (if so, why?), it’s best to leave it in as safe a wallet as possible. Here we go!</h3>
                                            <p>A blockchain "account" is composed of two parts: a public key and a private key. People send you money using your public key, while you alone use your private key to authenticate outgoing transactions. Anyone with your private key can do whatever they wish with your funds, so keeping it secure, while still easily accessible, is of the utmost importance.</p>
                                            <p>The thing is, without some handy-dandy software, doing all of these things isn't quite as easy as it sounds. How would I know the first thing about broadcasting a transaction to the network, let alone creating one, if I don't even know how to code?</p>
                                            <p>Pieces of software that allow you to broadcast easily (with the press of a button) are called wallets–and there are many different types, each with their own unique advantages and disadvantages. The important thing is, wallets are where you keep your private key. That’s the heart of it.</p>
                                        </div>
                                        <div className="gb-crypto-detail-row">
                                            <h3>The security of your wallet is the security of your private key is the security of your cryptocurrency, make sense? Safe wallet, safe crypto. Easy peasy.</h3>
                                            <p>When you purchase cryptocurrency on an exchange (Coinbase, Gemini, Binance, what have you), the exchange generates and stores addresses and keys for you on their servers. This means that your assets are only as safe as the servers they’re stored on, and exchanges are targets for hacks! </p>
                                            <p>Are they very safe to use, and getting safer every day? Yes. Have they been hacked in the past? Also yes. So, we strongly recommend removing cryptocurrency from your exchange account and putting it on a wallet that you control. This exponentially increases the safety of your money, like the difference between walking around with a $100 bill taped to the back of your shirt (fun!) and a bank vault.</p>
                                            <p>Hence you need a secure, private wallet. There are a number of options, but don’t worry! Our <Link to='/wallets/find-wallets'>Find a Wallet</Link> tool will help you find the one that’s right for you.</p>
                                        </div>
                                    </div>
                                    <div className="gb-crypto-bottom">
                                        <ul>
                                            <li>
                                                {/* <a href="{null}"> */}
                                                <a href={"http://www.facebook.com/sharer.php?u="+this.state.referralRoute} target="_blank" rel="noopener noreferrer">
                                                    <i className="gb-fb-icon"></i>
                                                </a>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="{null}"> */}
                                                <a href={"https://twitter.com/share?url="+this.state.referralRoute+"&amp;text=&amp;hashtags=goodbit"} target="_blank" rel="noopener noreferrer">
                                                    <i className="gb-twitter-icon"></i>
                                                </a>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="{null}"> */}
                                                <a href={"http://www.linkedin.com/shareArticle?mini=true&amp;url="+this.state.referralRoute}target="_blank" rel="noopener noreferrer">
                                                    <i className="gb-linkedin-icon"></i>
                                                </a>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="{null}"> */}
                                                <a href={"https://plus.google.com/share?url="+this.state.referralRoute} target="_blank" rel="noopener noreferrer">
                                                    <i className="gb-gplus-icon"></i>
                                                </a>
                                                {/* </a> */}
                                            </li>
                                        </ul>
                                        <h3>Read this next</h3>
                                        <div className="gb-next-post-link">
                                            <div className="gb-howto-blk">
                                                <label>How to</label>
                                            </div>
                                            <div className="gb-next-post-dtl">
                                                <p><Link to="/wallets/send-receive-crypto">How to: How To Send/Receive Crypto</Link></p>
                                                <span>WALLETS</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gb-wallets-slider">
                    <h1 className="text-center">Learn about <span>Wallets</span></h1>
                    <div className="swiper-container gb-wallet-slider-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide green-slide text-center">
                                <div className="slide-text">
                                    <h2>Wallets</h2>
                                    <h3>How To Send &amp; Receive Crypto</h3>
                                </div>
                                <Link className="gb-letsgo-btn" to="/wallets/send-receive-crypto">Let’s go<i></i></Link>
                            </div>
                            <div className="swiper-slide orange-slide text-center">
                                <div className="slide-text">
                                    <h2>Wallets</h2>
                                    <h3>Find a Wallet</h3>
                                </div>
                                <Link className="gb-letsgo-btn" to="/wallets/find-wallets">Let’s go<i></i></Link>
                            </div>
                        </div>
                        <div className="swiper-button-next gb-wallet-swiper-button-next"></div>
                        <div className="swiper-button-prev gb-wallet-swiper-button-prev"></div>
                    </div>
                </section>
            </React.Fragment>
         );
    }
    componentDidMount = () => {
        document.title = "What is Wallet? | Goodbit101";
        this.setState({referralRoute: window.location.href});
        this.initWalletSwiper();
        this.initFindWalletSwiper();
    }

    initWalletSwiper = () => {
        // eslint-disable-next-line
        let walletSwiper = new Swiper('.gb-wallet-slider-container', {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
            navigation: {
              nextEl: '.gb-wallet-swiper-button-next',
              prevEl: '.gb-wallet-swiper-button-prev',
            },
            breakpoints: {
                767: {
                  slidesPerView: 1.2,
                  centeredSlides: false
                }
              }
          });
    }
    initFindWalletSwiper = () => {
        // eslint-disable-next-line
        let findWalletSwiper = new Swiper('.gb-find-wallet-slider-container', {
            navigation: {
              nextEl: '.gb-find-wallet-swiper-button-next',
              prevEl: '.gb-find-wallet-swiper-button-prev',
            }
          });
    }
    scrollToContent(e,i) {
         //Set Active Link
         let lastactive = e.target.closest('ul').getElementsByClassName('active')[0];
         lastactive.classList.remove('active');
         e.target.closest('li').classList.add('active')
         //Scrollto Particular section
         let element = document.getElementsByClassName('gb-crypto-detail-row');
         element[i].scrollIntoView({behavior: 'smooth',block:'start'});
    }
}

export default WhatIsWallet;