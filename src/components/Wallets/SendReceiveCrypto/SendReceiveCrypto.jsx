import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

import "./SendReceiveCrypto.scss";
class SendReceiveCrypto extends Component {
    state = {
        referralRoute : ''
     }
    render() {
        return (
            <React.Fragment>
                <section className="gb-wallets-detail-main gb-buy-detail-main text-center">
                    <div className="container">
                        <div className="gb-wallet-banner-box">
                            <h2>Goodbit's How To</h2>
                            <h1>Send & Receive <br></br>Crypto</h1>
                            <p>Your grandma has been particularly interested in cryptocurrency recently, so much so that for her birthday, you, being a terribly charitable person (you sweetheart you), decide to send her a bitcoin of her own. Wow!</p>
                            <p>Okay, so you may have talked up your whole knowledge of the subject a bit. You know how to buy bitcoins using an online exchange… but how do you actually send them to someone else? Or receive them yourself, for that matter?</p>
                            <p>Fear not! You’re in the right place.</p>
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
                                            <li onClick={(e) => this.scrollToContent(e,0)} className="active"><a>Sending Crypto</a></li>
                                            <li onClick={(e) => this.scrollToContent(e,1)} ><a>Receiving Crypto</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 offset-md-1 col-lg-7">
                                <div className="gb-crypto-buydetail">
                                    <div className="gb-crypto-buy-block-main">
                                        <div className="gb-crypto-detail-row">
                                            <h3>Sending Crypto</h3>
                                            <div class="gb-crypto-detail-list">
                                                <h4>Step 1 — Find the ‘Send’ button in your wallet interface</h4>
                                                <p>Wallet interfaces vary widely, but there will always be a send button somewhere.</p>
                                            </div>
                                            <div class="gb-crypto-detail-list">
                                                <h4>Step 2 — Enter the amount of crypto you’d like to send (double check it’s the right amount!), and the recipient's public address</h4>
                                                <p>Note that for you to send crypto to Grandma, she’ll actually have to have her own address–she’ll need her own wallet, or an exchange account. Use our Find a Wallet tool to get her the right one, or sign her up for a Coinbase account!</p>
                                            </div>
                                            <div class="gb-crypto-detail-list">
                                                <h4>Step 3  — Check everything twice before clicking send</h4>
                                                <p>Check all your decimals before you hit send–there’s no way to cancel a transaction once it’s been sent, just like email. Make sure that you have her entire public address. If a digit is incorrect, or missing, you won’t be able to send her anything at all. Or worse yet, you’ll send the crypto to the wrong place, never to be seen again.</p>
                                                <p>Depending on which cryptocurrency you decide to send Grandma, it could take a few minutes. Be patient. Take a walk, smell the flowers. Mmmmmm. </p>
                                                <p>As long as you copied the address letter for letter, it’ll get there eventually. And that’s it!</p>
                                            </div>
                                        </div>
                                        <div className="gb-crypto-detail-row">
                                            <h3>Receiving Crypto</h3>
                                            <div class="gb-crypto-detail-list">
                                                <h4>Step 1 — Give your public address to the person who’s sending you crypto</h4>
                                                <p>You can find your public address by clicking the send/receive button in your wallet. Sometimes, your wallet will offer you the opportunity to generate a new address. This is optional. Remember, it’s critical that you give that person the entire address, and that’s each letter is as it should be, so just make sure you copied the whole thing.</p>
                                                <p>A very easy way to make sure the person sending you cryptocurrency has the right address is to have them send it back to you. That way, you can confirm it’s correct. </p>
                                            </div>
                                            <div class="gb-crypto-detail-list">
                                                <h4>Step 2: Well, that’s… that’s pretty much it</h4>
                                                <p>Wait a few minutes for your crypto to arrive. Do we need to go through the whole “smell the flowers” thing again? If the address was right, it’ll get there. Don’t spend it all at once, now.</p>
                                                <p>If you come across any issues, please reach out to us in the <Link to="/ask-us-anything">Ask Us Anything</Link> page!</p>
                                            </div>
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
                                                <p> <Link to="/wallets/find-wallets">How to: Find A Wallet</Link></p>
                                                <span>WALLET </span>
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
                                    <h3>What is a wallet?</h3>
                                </div>
                                <Link className="gb-letsgo-btn" to="/wallets/what-is-wallet">Let’s go<i></i></Link>
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
        document.title = "Send & Receive Crypto | Goodbit101";
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

export default SendReceiveCrypto;