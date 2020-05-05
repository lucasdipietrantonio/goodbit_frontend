import React, { Component } from 'react';
import './Basics.scss';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import { Link } from "react-router-dom";
class Wallets extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
                <section className="gb-basics-main">
                    <div className="container">
                        <h1>Basics</h1>
                        <p>Choose your lesson</p>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="gb-basic-main-btn">
                                    <Link to='/learn/money-101' className="gb-basic-btn gb-money-btn">
                                        <img src={require('../../assets/images/basics/money.svg')}  alt="Money-Video" />
                                        <h2>Money 101</h2>
                                        <h3>How has money changed over time, and where do cryptocurrencies fit in?</h3>
                                    </Link>
                                    <Link to='/learn/bitcoin-101' className="gb-basic-btn gb-bitcoin-btn">
                                        <img src={require('../../assets/images/basics/bitcoin.svg')}  alt="Money-Video" />
                                        <h2>Bitcoin 101</h2>
                                        <h3>The moment we’ve all been waiting for. What is it Bitcoin, and why is it important?</h3>
                                    </Link>
                                    <Link to='/learn/blockchain-101' className="gb-basic-btn gb-blockchain-btn">
                                        <img src={require('../../assets/images/basics/blockchain.svg')}  alt="Money-Video" />
                                        <h2>Blockchain 101</h2>
                                        <h3>It’s a chain! Of… blocks? A closer look of the tech underlying crypto.</h3>
                                    </Link>
                                    <Link to='/learn/ethereum-101' className="gb-basic-btn gb-ethereum-btn">
                                        <img src={require('../../assets/images/basics/ethereum.svg')}  alt="Money-Video" />
                                        <h2>Ethereum 101</h2>
                                        <h3>A cryptocurrency, a blockchain, and a decentralized world. A dive into one of the top cryptocurrencies!</h3>
                                    </Link>
                                    <Link to='/learn/future-101' className="gb-basic-btn gb-future-btn">
                                        <img src={require('../../assets/images/basics/future.svg')}  alt="Money-Video" />
                                        <h2>Future 101</h2>
                                        <h3>How might blockchain play a part in our world in the future?</h3>
                                    </Link>
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
                                <button className="gb-letsgo-btn">Let’s go<i></i></button>
                            </div>
                            <div className="swiper-slide orange-slide text-center">
                                <div className="slide-text">
                                    <h2>Wallets</h2>
                                    <h3>How money has changed over time</h3>
                                </div>
                                <button className="gb-letsgo-btn">Let’s go<i></i></button>
                            </div>
                            <div className="swiper-slide green-slide text-center">
                                <div className="slide-text">
                                    <h2>Wallets</h2>
                                    <h3>How do you buy Bitcoin?</h3>
                                </div>
                                <button className="gb-letsgo-btn">Let’s go<i></i></button>
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
        document.title = 'Basic | Goodbit101'
        this.initWalletSwiper();
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
                  slidesPerView: 1.2,centeredSlides: false
                }
              }
          });
    }
}

export default Wallets;